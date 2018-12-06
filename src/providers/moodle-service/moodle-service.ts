import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

@Injectable()
export class MoodleServiceProvider {
  token: string = "92550f65639328cc3836c63e8de96b21";
  apiUrl: string = 'https://aulas.iztacala.unam.mx/webservice/rest/server.php?wstoken=' + this.token;

  constructor(public http: HttpClient, public toastServiceProvider: ToastServiceProvider, public gatoServiceProvider: GatoServiceProvider) {
    console.log('Hello MoodleServiceProvider Provider');
  }

  searchUsername(username: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&wsfunction=core_user_get_users&criteria%5B0%5D%5Bkey%5D=username&moodlewsrestformat=json&criteria%5B0%5D%5Bvalue%5D=' + username).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchCourse(shortname: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&wsfunction=core_course_get_courses_by_field&moodlewsrestformat=json&field=shortname&value=' + shortname).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  resetPassword(id: string, password: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&wsfunction=core_user_update_users&moodlewsrestformat=json&users[0][password]=' + password + '&users[0][id]=' + id).subscribe(data => {
        this.toastServiceProvider.create('Se reinicio la contraseña!');
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  makeEnrollment(user: any) {
    var datauser = 'users[0][username]='+user[0].username+'&users[0][firstname]='+user[0].firstname+'&users[0][lastname]='+user[0].lastname+'&users[0][email]='+user[0].email+'&users[0][password]='+this.gatoServiceProvider.defaultPassword(user[0].curp);
    
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&wsfunction=core_user_create_users&moodlewsrestformat=json&' + datauser).subscribe(data => {
        this.toastServiceProvider.create('Se matriculo al usuario!');
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteUser(idUser: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&wsfunction=core_user_delete_users&moodlewsrestformat=json&userids[0]=' + idUser).subscribe(data => {
        this.toastServiceProvider.create('Se ha eliminado al usuario!');
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
