import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email',
})
export class EmailPipe implements PipeTransform {
  
  transform(value: string) {
    if(value == '') {
      return 'No disponible';
    } else {
      return value.toLowerCase();
    }
  }
}
