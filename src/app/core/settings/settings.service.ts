import { Injectable, EventEmitter } from '@angular/core';
import { BaseService } from '../base-service/base-service.service';
import { SettingChangeEvent, Setting, Theme } from './settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseService {
  private _data: {
    [name: string]: any;
  };
  public change: EventEmitter<SettingChangeEvent>;
  constructor() {
    super();

    // Initialize data
    // TODO: load initial values from configuration or local storage
    this._data = {};
    this._data[Setting.Theme] = Theme.Light;

    this.change = new EventEmitter();
  }
  getSetting(name: Setting) {
    return this._data[name];
  }
  setSetting(name: Setting, value: any) {
    this._data[name] = value;
    this.change.emit({ name, value });
  }
}
