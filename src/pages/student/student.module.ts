import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';
import { StudentPage } from './student';

@NgModule({
  declarations: [
    StudentPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentPage),
    SharedModule,
  ],
})
export class StudentPageModule {}
