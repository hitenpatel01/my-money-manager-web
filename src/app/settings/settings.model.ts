export enum Setting {
    DarkTheme = "DARK_THEME"
}

export interface SettingData {
    [name: string]: any;
}

export interface SettingChangeEvent {
    name: Setting;
    value: any;
}