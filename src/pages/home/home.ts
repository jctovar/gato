import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController, public gatoServiceProvider: GatoServiceProvider) {

  }

  

}
