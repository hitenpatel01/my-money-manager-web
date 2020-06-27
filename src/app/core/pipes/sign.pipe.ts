import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sign'
})
export class SignPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const valueType = typeof value;
    if ('number' !== valueType && 'string' !== valueType) {
      return value;
    }

    const valueString = String(value);
    return /^\+|\-/.test(valueString) ? value : `+${value}`;
  }
}
