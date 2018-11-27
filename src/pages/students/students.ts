import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
    this.gatoServiceProvider.getStudents(this.career.career, this.career.module, this.career.group1)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
        this.items = data;
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StudentPage, {
      item: item
    });
  }

}
