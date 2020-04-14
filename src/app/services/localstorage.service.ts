import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { User, DriveWealthPortfolio } from '@app/model/model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

    public saveUser(user: User) {
      this.storage.set('user', user);
    }

    public getUser(): User {
      return this.storage.get('user');
    }

}
