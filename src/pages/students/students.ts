import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModulesProvider } from '../../providers/modules/modules';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modulesProvider: ModulesProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
    this.modulesProvider.getStudents(this.career.career, this.career.module, this.career.group1)
    .subscribe(
      (data) => { // Success
        this.items = data;
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  itemTapped(event, item) {
    
  }

}
