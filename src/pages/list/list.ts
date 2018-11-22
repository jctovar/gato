import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentServiceProvider } from '../../providers/student-service/student-service';
import { UserPage } from '../user/user';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public studentService: StudentServiceProvider) {
  }

  ionViewDidLoad(){
    this.studentService.getUsers("%tovar%")
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data))
        this.users = data['users'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UserPage, {
      item: item
    });
  }

  searchToggle(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SearchPage, {
      item: item
    });
  }
}
