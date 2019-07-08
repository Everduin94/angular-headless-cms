import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let subString = 7;
    if (value.startsWith('https://')) subString = 8;
    const result = value.substring(subString);
    let elipse = '...';
    if (result.length <= 35) elipse = '';
    const result2 = result.substring(0, 35) + elipse;
    return result2;
  }

}

