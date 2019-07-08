import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {
  /* OPTIONAL 3.1 */ 
  transform(value: any, args?: any): any {
    return marked(value);
  }
  /* END OPTIONAL 3.1 */ 

}
