import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';
import { StudentsPage } from './students';

@NgModule({
  declarations: [
    StudentsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(StudentsPage),
    SharedModule
  ],
})
export class StudentsPageModule {}
