import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ModulesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ModulesProvider Provider');
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
}
