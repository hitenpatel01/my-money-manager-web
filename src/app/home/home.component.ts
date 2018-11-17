import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { Subscription } from 'rxjs';
import { SettingChangeEvent, Setting } from '../settings/settings.model';

@Component({
  selector: 'm3-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _settingsSubscription: Subscription;
  isDarkTheme;
  constructor(private _settingsService: SettingsService) { }
  ngOnInit() {
    this.isDarkTheme = this._settingsService.getSetting(Setting.DarkTheme);
    this._settingsSubscription = this._settingsService.change.subscribe((event: SettingChangeEvent) => {
      if (event.name === Setting.DarkTheme) {
        this.isDarkTheme = event.value;
      }
    });
  }
}
