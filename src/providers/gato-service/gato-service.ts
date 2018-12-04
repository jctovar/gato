import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GatoServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GatoServiceProvider Provider');
  }

  getCareers() {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/courses/careers');
  }

  getModules(career: string) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/courses/modules/' + career);
  }

  getGroups(career: string, module: string) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/courses/groups/' + career + '/' + module);
  }

  getStudents(career: string, module: string, group: string) {
      return this.http.get('https://galadriel.ired.unam.mx/gato/api/courses/students/' + career + '/' + module + '/' + group);
  }

  getStudent(id: any) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/students/id/' + id);
  }

  getSearchStudent(name: string) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/students/name/' + name);
  }

  getInscriptions(username: string) {
    return this.http.get('https://galadriel.ired.unam.mx/gato/api/students/modules/' + username);
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
