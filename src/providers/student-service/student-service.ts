import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentServiceProvider Provider');
  }

  getUsers(queryString: string) {
    console.log(queryString);
    return this.http.get('https://aulas.iztacala.unam.mx/webservice/rest/server.php?wstoken=92550f65639328cc3836c63e8de96b21&wsfunction=core_user_get_users&criteria[0][key]=lastname&moodlewsrestformat=json&criteria[0][value]=' + queryString);
  }

}
