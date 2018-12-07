import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';
import { MoodleServiceProvider } from '../../providers/moodle-service/moodle-service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  items: any;
  career: any;
  title: string;
  shortname: string;
  idCourse: string;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastServiceProvider: ToastServiceProvider, public alertServiceProvider: AlertServiceProvider, public moodleServiceProvider: MoodleServiceProvider, public gatoServiceProvider: GatoServiceProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module + '_' + this.career.group1;
    this.getStudents(this.career.career, this.career.module, this.career.group1);
    this.shortname = this.career.career + '_' + this.career.module + '_' + this.career.group1;
  }

  getStudents(careerName, careerModule, CareerGroup) {
    this.gatoServiceProvider.getStudents(careerName, careerModule, CareerGroup)
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push('StudentPage', {
      item: item
    });
  }

  makeEnrollments(fab: FabContainer) {
    fab.close();
    this.moodleServiceProvider.searchCourse(this.shortname)
    .then(data => {
      console.log('courseId: ' + JSON.stringify(data['courses'][0].id));
      this.idCourse = data['courses'][0].id;
    });
    
    this.alertServiceProvider.presentAlertWithCallback('Matricular usuarios?','Esta seguro de matricular todos los usuarios en "' + this.shortname + '"?')
    .then(data => {
      if(data) {
        Object.keys(this.items).forEach(key => { 
          this.moodleServiceProvider.searchUsername(this.items[key].username)
          .then(data => {
            if (typeof data['users'][0] === "undefined") {
              
            } else {
              console.log('userId: ' + JSON.stringify(data['users'][0].id));
              this.moodleServiceProvider.enrollmentUser(data['users'][0].id, this.idCourse)
              .then(data => {
                this.count += 1;
                console.log(this.count);
              });
            }
          });
        }); 
      }
    });
  }
}
