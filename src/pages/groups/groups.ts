import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gatoServiceProvider: GatoServiceProvider) {
    this.career = navParams.get('item');
    this.title = this.career.module;
    this.getGroups(this.career.career, this.career.module);
  }

  getGroups(careerName, careerModule) {
    this.gatoServiceProvider.getGroups(careerName, careerModule)
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push('StudentsPage', {
      item: item
    });
  }
}
