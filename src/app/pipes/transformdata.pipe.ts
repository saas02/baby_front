import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformdata'
})
export class TransformdataPipe implements PipeTransform {

  transform(data:any): string {
    let info = ""; 
    data.forEach((value : any) => {
      info += value.name + (", ")
    })
    return info.slice(0, -2);
  }

}
