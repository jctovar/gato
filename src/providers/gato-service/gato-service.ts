import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GatoServiceProvider {
  apiUrl = 'https://galadriel.ired.unam.mx/gato/api';

  constructor(public http: HttpClient) {
    console.log('Hello GatoServiceProvider Provider');
  }

  getCareers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/courses/careers').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getModules(career: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/courses/modules/' + career).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGroups(career: string, module: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/courses/groups/' + career + '/' + module).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStudents(career: string, module: string, group: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/courses/students/' + career + '/' + module + '/' + group).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStudent(id: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/students/id/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getInscriptions(username: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/students/modules/' + username).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSearchStudent(name: string) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/students/name/' + name);
  }

  defaultPassword(curp: string) {
    var year = '19';

    if(Number(curp.substring(4,6)) < 20) year = '20';

    if(curp != '') {
      return curp.substring(8,10) + curp.substring(6,8) + year + curp.substring(4,6);
    } else {
      return '12345678';
    }
  }
}
