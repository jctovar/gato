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
  ifEnrollment: boolean = true;
  notEnrollment: boolean = true;
  inscriptions: any;

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
        if (typeof data['users'][0] === "undefined") {
          this.ifEnrollment = false;
        } else {
          this.notEnrollment = false;
        }
        this.moodleUser = data['users'];
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )

    this.gatoServiceProvider.getInscriptions(this.user.username)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
        //if (typeof data['users'][0] === "undefined") this.enrollment = false;
        this.inscriptions = data;
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  changePassword(fab: FabContainer) {
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
            this.resetPassword(this.moodleUser[0].id,this.gatoServiceProvider.defaultPassword(this.items[0].curp));
          }
        }
      ]
    });
    confirm.present();
  }

  getEnrollment(fab: FabContainer) {
    fab.close();
    const confirm = this.alertCtrl.create({
      title: 'Reiniciar contraseña?',
      message: 'Esta seguro de matricular este usuario?',
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
            this.enrollmentUser(this.items);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteUser(fab: FabContainer) {
    fab.close();
    const confirm = this.alertCtrl.create({
      title: 'Reiniciar contraseña?',
      message: 'Esta seguro de eliminar este usuario?',
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
            this.removeUser(this.moodleUser[0].id);
          }
        }
      ]
    });
    confirm.present();
  }

  // Funciones que hay que sacar de aqui
  enrollmentUser(user: any) {
    var newuser = 'users[0][username]='+this.items[0].username+'&users[0][firstname]='+this.items[0].firstname+'&users[0][lastname]='+this.items[0].lastname+'&users[0][email]='+this.items[0].email+'&users[0][password]='+this.gatoServiceProvider.defaultPassword(this.items[0].curp);
 
    this.moodleServiceProvider.postEnrollment(newuser)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
  }

  removeUser(id: string) {
    this.moodleServiceProvider.deleteUser(id)
    .subscribe(
      (data) => { // Success
        console.log(JSON.stringify(data));
      },
      (error) =>{
        console.error(JSON.stringify(error));
      }
    )
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
}
