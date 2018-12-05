import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModulesPage } from '../../pages/modules/modules';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';

@Component({
  selector: 'page-careers',
  templateUrl: 'careers.html',
})
export class CareersPage {
  items: any;

  constructor(public navCtrl: NavController, public gatoServiceProvider: GatoServiceProvider) {
    this.getCareers();
  }

  getCareers() {
    this.gatoServiceProvider.getCareers()
    .then(data => {
      this.items = data;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ModulesPage, {
      item: item
    });
  }
}
