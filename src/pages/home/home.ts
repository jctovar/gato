import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModulesPage } from '../../pages/modules/modules';
import { ModulesProvider } from '../../providers/modules/modules';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController, public modulesProvider: ModulesProvider) {

  }

  ionViewDidLoad(){
    this.modulesProvider.getCareers()
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
