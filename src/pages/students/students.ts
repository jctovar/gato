import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, FabContainer } from 'ionic-angular';
import { StudentPage } from '../../pages/student/student';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gatoServiceProvider: GatoServiceProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module + ' grupo ' + this.career.group1;
    this.getStudents(this.career.career, this.career.module, this.career.group1);
  }

  getStudents(careerName, careerModule, CareerGroup) {
    this.gatoServiceProvider.getStudents(careerName, careerModule, CareerGroup)
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StudentPage, {
      item: item
    });
  }

  getCSV(fab: FabContainer) {
    fab.close();
  }

}
