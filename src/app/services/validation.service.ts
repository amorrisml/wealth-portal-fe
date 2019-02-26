import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private validationMap: Map<String, any>;
  constructor() {

      this.validationMap = new Map();
      this.validationMap.set('notblank', (v: string) => {
          return v === '';
      });

      this.validationMap.set('isValidEmail', (v: string) => {
          return v && v.indexOf('@') === -1 ;
      });
  }

  validate(name: string, value: string): boolean {
      const func = this.validationMap.get(name);
      return !func(value);
  }

  validationExists(name: string): boolean {
      return this.validationMap.has(name);
  }
}