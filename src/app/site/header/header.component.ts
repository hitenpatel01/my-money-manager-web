import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { SettingsService } from '../../core/settings/settings.service';
import { Setting, Theme } from '../../core/settings/settings.model';

@Component({
  selector: 'm3-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter();
  get isDarkTheme() {
    return this._settingsService.getSetting(Setting.Theme) === Theme.Dark;
  }
  constructor(private _settingsService: SettingsService) { }
  toggleTheme() {
    this._settingsService.setSetting(Setting.Theme, this.isDarkTheme ? Theme.Light : Theme.Dark);
  }
}
