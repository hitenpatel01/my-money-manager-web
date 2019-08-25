import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu } from '@angular/material/menu';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { SettingsService } from '../settings/settings.service';
import { Setting } from '../settings/settings.model';

@Component({
  selector: 'm3-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter();
  get isDarkTheme(){
    return this._settingsService.getSetting(Setting.DarkTheme);
  }
  //@Output() toggleTheme = new EventEmitter<boolean>();
  constructor(private _settingsService: SettingsService) { }
  toggleTheme(){
    this._settingsService.setSetting(Setting.DarkTheme, !this.isDarkTheme);
  }
}
