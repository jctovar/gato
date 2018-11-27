import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, FabContainer } from 'ionic-angular';
import { GatoServiceProvider } from '../../providers/gato-service/gato-service';
import { MoodleServiceProvider } from '../../providers/moodle-service/moodle-service';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  user: any;
  items: any;
  moodleUser: any;
  enrollment: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public moodleServiceProvider: MoodleServiceProvider, public gatoServiceProvider: GatoServiceProvider, public alertCtrl: AlertController) {
    this.user = navParams.get('item');
    console.log(this.user.username);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    
    this.gatoServiceProvider.getStudent(this.user.id)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
        this.items = data;
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    );
    
    this.moodleServiceProvider.searchUsername(this.user.username)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
        if (typeof data['users'][0] === "undefined") this.enrollment = false;
        this.moodleUser = data['users'];
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  showConfirm(fab: FabContainer) {
    fab.close();
    const confirm = this.alertCtrl.create({
      title: 'Reiniciar contraseña?',
      message: 'Esta seguro de reiniciar la contraseña a la contraseña por omisión?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            // load function for reset the password
            this.resetPassword(this.moodleUser[0].id,this.defaultPassword(this.items[0].curp))
          }
        }
      ]
    });
    confirm.present();
  }

  resetPassword(id: string, password: string) {
    this.moodleServiceProvider.resetPassword(id, password)
    .subscribe(
      (data) => { // Success
        const toast = this.toastCtrl.create({
          message: 'Contraseña actualizada',
          duration: 3000
        });
        toast.present();
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  defaultPassword(curp: string) {
    var year = '19';

    if(Number(curp.substring(4,6)) < 20) year = '20';

    if(curp != '') {
      return curp.substring(8,10) + curp.substring(6,8) + year + curp.substring(4,6);
    } else {
      return '12345678';
    }
  }

}
