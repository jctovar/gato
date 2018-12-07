import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';
import { MoodleServiceProvider } from '../../providers/moodle-service/moodle-service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  user: any;
  items: any;
  moodleUser: any;
  ifEnrollment: boolean = true;
  notEnrollment: boolean = true;
  inscriptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastServiceProvider: ToastServiceProvider, public alertServiceProvider: AlertServiceProvider, public moodleServiceProvider: MoodleServiceProvider, public gatoServiceProvider: GatoServiceProvider) {
    this.user = navParams.get('item');
    this.loadDatas();
  }

  loadDatas() {
    this.getStudent(this.user.id);
    this.getInscriptions(this.user.username);
    this.checkEnrollment(this.user.username);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadDatas();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  checkEnrollment(usernameStudent) {
    this.moodleServiceProvider.searchUsername(usernameStudent)
    .then(data => {
      if (typeof data['users'][0] === "undefined") {
        this.ifEnrollment = false;
      } else {
        this.notEnrollment = false;
      }
      this.moodleUser = data['users'];
    });
  }

  getStudent(idStudent) {
    this.gatoServiceProvider.getStudent(idStudent)
    .then(data => {
      this.items = data;
    });
  }

  getInscriptions(Student) {
    this.gatoServiceProvider.getInscriptions(Student)
    .then(data => {
      this.inscriptions = data;
    });
  }

  changePassword(fab: FabContainer) {
    fab.close();
    this.alertServiceProvider.presentAlertWithCallback('Reiniciar contraseña?','Esta seguro de reiniciar la contraseña a la contraseña por omisión?')
    .then(data => {
      if(data) this.moodleServiceProvider.resetPassword(this.moodleUser[0].id,this.gatoServiceProvider.defaultPassword(this.items[0].curp));
    }); 
  }

  makeEnrollment(fab: FabContainer) {
    fab.close();
    this.alertServiceProvider.presentAlertWithCallback('Añadir usuario?','Esta seguro de añadir este usuario?')
    .then(data => {
      if(data) this.moodleServiceProvider.addUser(this.items);
      this.loadDatas();
    });
  }

  deleteUser(fab: FabContainer) {
    fab.close();
    this.alertServiceProvider.presentAlertWithCallback('Eliminar usuario?','Esta seguro de eliminar este usuario?')
    .then(data => {
      if(data) this.moodleServiceProvider.deleteUser(this.moodleUser[0].id);
      this.loadDatas();
    });
  }
}
