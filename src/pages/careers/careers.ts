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
  }

  ionViewDidLoad(){
    this.gatoServiceProvider.getCareers()
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
    this.navCtrl.push(ModulesPage, {
      item: item
    });
  }

}
