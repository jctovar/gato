import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentsPage } from '../../pages/students/students';
import { ModulesProvider } from '../../providers/modules/modules';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modulesProvider: ModulesProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module;
    console.log(JSON.stringify(this.career));
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad GroupsPage');
    this.modulesProvider.getGroups(this.career.career, this.career.module)
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
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StudentsPage, {
      item: item
    });
  }
}
