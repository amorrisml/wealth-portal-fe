import { Injectable } from '@angular/core';
import * as bulKJobs from 'assets/batchjob.json';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BulkDataService {

  bulkJobs: any
  constructor() { 
    this.bulkJobs = bulKJobs
  }

  getBulkJobMetaData(): Observable<any[]> {
      return  new Observable((observer) => {
        observer.next(this.bulkJobs.default);
        observer.complete()
      });
  }
}
