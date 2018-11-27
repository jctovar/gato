import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentPage } from '../../pages/student/student';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';

@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {
  loading: Boolean;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gatoServiceProvider: GatoServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentListPage');
  }

  searchStudent(query: any) {
    const val = query.target.value;

    if (val.length > 3) {
      this.loading = true;
      this.gatoServiceProvider.getSearchStudent(val)
      .subscribe(
        (data) => { // Success
          console.log(JSON.stringify(data));
          this.items = data;
          this.loading = false;
        },
        (error) =>{
          console.error(JSON.stringify(error));
          this.items = [];
          this.loading = false;
        }
      )
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StudentPage, {
      item: item
    });
  }

}
