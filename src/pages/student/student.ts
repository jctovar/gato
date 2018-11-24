import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModulesProvider } from '../../providers/modules/modules';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  items: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modulesProvider: ModulesProvider) {
    this.user = navParams.get('item');
    console.log('id' + this.user.id);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.modulesProvider.getStudent(this.user.id)
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
}
