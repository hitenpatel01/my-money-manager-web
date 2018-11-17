import { Component, Inject, OnInit } from '@angular/core';
// import { THEME_TOKEN, Theme } from './shared';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from '../environments/environment';
import { SettingsService } from './settings/settings.service';
import { Subscription } from 'rxjs';
import { SettingChangeEvent, Setting } from './settings/settings.model';

const LightThemeClass = 'm3-light-theme';
const DarkThemeClass = 'm3-dark-theme'

@Component({
  selector: 'm3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-money-manager';
  themeClass;
  private _settingsSubscription: Subscription;
  constructor(private _settingsService: SettingsService, private _overlayContainer: OverlayContainer) { }
  ngOnInit() {
    this._changeTheme(this._settingsService.getSetting(Setting.DarkTheme));

    this._settingsSubscription = this._settingsService.change.subscribe((event: SettingChangeEvent) => {
      if(event.name === Setting.DarkTheme){
        this._changeTheme(event.value)
      }
    });
  }
  private _changeTheme(toggle: boolean) {
    this.themeClass  = toggle ? DarkThemeClass : LightThemeClass;
    this._updateOverlayContainerClass();
  }
  private _updateOverlayContainerClass() {
    const overlayContainerClasses = this._overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(item => item.endsWith('-theme'));
    if (themeClassesToRemove && themeClassesToRemove.length > 0) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.themeClass);
  }
}
