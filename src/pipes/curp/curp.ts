import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curp',
})
export class CurpPipe implements PipeTransform {
  
  transform(value: string, args) {
    var year = '19';
    var gender = 'Mujer';

    if(args == 'password') {
      if(Number(value.substring(4,6)) < 20) year = '20';
      return value.substring(8,10) + value.substring(6,8) + year + value.substring(4,6);
    }
    else if(args == 'gender'){
      if(value.substring(10,11) == 'H') gender = 'Hombre';
      return gender;
    }
    else {
      return value;
    }
  }
}
