import { Pipe, PipeTransform } from '@angular/core';
import md5 from 'crypto-md5';

@Pipe({
  name: 'gravatar',
})
export class GravatarPipe implements PipeTransform {
  
  transform(value: string, args) {
    if(args == null) args = "mp";
    return "https://www.gravatar.com/avatar/" + md5(value.toLowerCase(), 'hex') + "?d=" + args;
  }
}
