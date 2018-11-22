import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsPage } from '../../pages/groups/groups';
import { ModulesProvider } from '../../providers/modules/modules';


@IonicPage()
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html',
})
export class ModulesPage {
  items: any;
  career: any;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modulesProvider: ModulesProvider) {
    this.career = navParams.get('item');
    this.title = this.career.name;
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad ModulesPage');
    this.modulesProvider.getModules(this.career.name)
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
