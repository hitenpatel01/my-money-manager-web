import { Injectable } from '@angular/core';
import { inherits } from 'util';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseService {

  constructor() {
    super();
  }
  setValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
  private getValue(key: string) {
    return window.localStorage.getItem(key);
  }
}
