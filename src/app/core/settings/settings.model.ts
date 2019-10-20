export enum Theme {
    Dark = 'Dark',
    Light = 'Light'
}
export enum Setting {
    Theme = 'Theme'
}

export interface SettingChangeEvent {
    name: Setting;
    value: any;
}
