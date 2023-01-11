import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notempty'
})
export class EmptyPipe implements PipeTransform {

  transform(data:any): boolean {
    return (typeof data !== 'undefined' && data != 0) ? true : false;
  }

}
