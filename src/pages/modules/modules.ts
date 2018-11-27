import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsPage } from '../../pages/groups/groups';
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
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ModulesPage');
    this.gatoServiceProvider.getModules(this.career.name)
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
    this.navCtrl.push(GroupsPage, {
      item: item
    });
  }
}
