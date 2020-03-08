import { Component, Inject, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { SettingsService } from './core/settings/settings.service';
import { Subscription } from 'rxjs';
import { SettingChangeEvent, Setting, Theme } from './core/settings/settings.model';
import { UserService } from './user/user.service';

enum ThemeClass {
  Light = 'm3-light-theme',
  Dark = 'm3-dark-theme'
}

@Component({
  selector: 'm3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-money-manager';
  themeClass;
  sideNavMode;
  isOpened;
  private _settingsSubscription: Subscription;
  constructor(private _settingsService: SettingsService,
    public userService: UserService,
    private _overlayContainer: OverlayContainer,
    public breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this._setTheme(this._settingsService.getSetting(Setting.Theme));

    this._settingsSubscription = this._settingsService.change.subscribe((event: SettingChangeEvent) => {
      if (event.name === Setting.Theme) {
        this._setTheme(event.value);
      }
    });

    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.sideNavMode = state.matches ? 'over' : 'side';
        this.isOpened = state.matches ? false : true;
        if (state.matches) {
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
        }
      });
  }
  private _setTheme(theme: Theme) {
    this.themeClass = ThemeClass[theme];
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
