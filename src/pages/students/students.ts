import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, FabContainer } from 'ionic-angular';
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
  course1: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastServiceProvider: ToastServiceProvider, public alertServiceProvider: AlertServiceProvider, public moodleServiceProvider: MoodleServiceProvider, public gatoServiceProvider: GatoServiceProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module + ' grupo ' + this.career.group1;
    this.getStudents(this.career.career, this.career.module, this.career.group1);
    this.course1 = this.career.career + '_' + this.career.module + '_' + this.career.group1;
  }

  getStudents(careerName, careerModule, CareerGroup) {
    this.gatoServiceProvider.getStudents(careerName, careerModule, CareerGroup)
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push('StudentPage', {
      item: item
    });
  }

  getCSV(fab: FabContainer) {
    fab.close();
    this.alertServiceProvider.presentAlertWithCallback('Eliminar usuario?','Esta seguro de eliminar este usuario?')
    .then(data => {
      if(data) {
        this.moodleServiceProvider.searchCourse('biologia_1012_1701')
        .then(data => {
          console.log(JSON.stringify(data));
        });
      }
    });
    this.items.forEach(function(student) { 
      console.log(student.id + ' ' + student.email + ' ' + student.firstname + ' ' + student.lastname + ' ' + student.curp + ' ' + student.plan + '_' + student.module + '_' + student.group1); 
    });
  }

}
