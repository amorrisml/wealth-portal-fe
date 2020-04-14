import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WebsocketService } from '@app/services/websocket.service';
import { environment } from '@env/environment';
import { JsonPipe } from '@angular/common';
import { GridOptions } from 'ag-grid-community';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-drivewealtheventlistener',
  templateUrl: './drivewealtheventlistener.component.html',
  styleUrls: ['./drivewealtheventlistener.component.scss']
})
export class DrivewealtheventlistenerComponent implements OnInit, OnDestroy {

  gridOptions: GridOptions;
  @ViewChild('infoGrid') infoGrid: any;

  eventTypes: string[];
  selectedEvents: any;
  pause: boolean;

  constructor(private websocketService: WebsocketService,
    private router: Router) {
    this.pause = false;
    this.gridOptions = {
      enableRangeSelection: true,
      defaultColDef: {
        editable: true,
        resizable: true,
      },
      rowSelection: 'multiple',
      columnDefs: [],
      pagination: true,
    };

    this.gridOptions.columnDefs = [
      { headerName: 'eventId', field: 'id', width: 320 },
      { headerName: 'Type', field: 'type', filter: true, width: 150 },
      { headerName: 'Timestamp', field: 'timestamp', width: 200 },
      { headerName: 'User ID', field: 'userID', filter: true, width: 120, sortable: true },
      { headerName: 'AccountId', field: 'accountId', filter: true, width: 120 },
      { headerName: 'Account #', field: 'accountNo', filter: true, width: 120 },
      { headerName: 'payload', field: 'payload', width: 600 }
    ];

    this.eventTypes = [
      'accounts.created',
      'accounts.updated',
      'accounts.updated',
      'accounts.violation.created',
      'accounts.violation.removed',
      'accounts.commission.updated',
      'tradeconfirms.created',
      'accounts.position.updated',
      'users.created',
      'users.updated',
      'auth.tokens.created',
      'orders.created',
      'orders.updated',
      'orders.completed',
      'deposits.created',
      'deposits.updated',
      'transactions.created',
      'redemptions.created',
      'redemptions.updated',
      'instruments.created',
      'instruments.updated',
    ];

    /*this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // save your data
      }
    });*/

    this.selectedEvents = this.eventTypes.sort().map(e => {
      return { name: e, selected: true };
    });
  }

  ngOnInit() {
    this.websocketService
      .connect(`${environment.webSocketDomain}/drivewealthEvents`)
      .subscribe((value: Event) => {
        console.log(value);
      });
    this.websocketService
      .listen()
      .subscribe((p: any) => {
        const event = JSON.parse(p.data);
        if (!this.pause && this.isSelectedEvent(event.type)) {
          const item = {};

          item['id'] = event.eventId;
          item['type'] = event.type;
          item['timestamp'] = event.timestamp;
          item['userID'] = event.payload.userID;
          item['accountId'] = event.payload.accountID;
          item['accountNo'] = event.payload.accountNo;
          item['payload'] = p.data;
          this.infoGrid.api.updateRowData({ add: [item], addIndex: 0 });
        }
      });
  }

  ngOnDestroy(): void {
    console.log('closing socket');
    this.websocketService.close();
  }

  isSelectedEvent(eventType: string): boolean {
    const event = this.selectedEvents.filter(e => e.name === eventType);
    if (event[0]) {
      return event[0].selected;
    } else {
      return true;
    }
  }

  onSelectAll($event) {
    if ($event.target.selected) {
      this.selectedEvents.forEach(e => {
        e.selected = true;
      });
    } else {
      this.selectedEvents.forEach(e => {
        e.selected = false;
      });
    }
  }

  onChange(f, $event) {
    console.log(f);
  }

  exportToCsv() {
    const params = {
      suppressQuotes: true,
      columnSeparator: ';',
      customHeader: false,
      customFooter: false
    };
    this.infoGrid.api.exportDataAsCsv(params);
  }

}
