import { Injectable } from '@angular/core';
import { inherits } from 'util';
import { BaseService } from '../base-service/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseService {

  constructor() {
    super();
  }
  setValue(key: string, value: any) {
    value = 'object' === typeof value ? JSON.stringify(value) : value;
    window.sessionStorage.setItem(key, value);
  }
  getValue(key: string) {
    const value = window.sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  clearValue(key: string) {
    window.sessionStorage.removeItem(key);
  }
}
