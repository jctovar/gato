import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';


@IonicPage()
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html',
})
export class ModulesPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gatoServiceProvider: GatoServiceProvider) {
    this.career = navParams.get('item');
    this.title = this.career.name;
    this.getModules(this.career.name);
  }

  getModules(careerName) {
    this.gatoServiceProvider.getModules(careerName)
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push('GroupsPage', {
      item: item
    });
  }
}
