import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CareersPage } from '../pages/careers/careers';
import { ModulesPage } from '../pages/modules/modules';
import { GroupsPage } from '../pages/groups/groups';
import { StudentsPage } from '../pages/students/students';
import { StudentPage } from '../pages/student/student';
import { StudentListPage } from '../pages/student-list/student-list';
import { SetupPage } from '../pages/setup/setup';

import { GravatarPipe } from '../pipes/gravatar/gravatar';
import { CurpPipe } from '../pipes/curp/curp';
import { EmailPipe } from '../pipes/email/email';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MoodleServiceProvider } from '../providers/moodle-service/moodle-service';
import { GatoServiceProvider } from '../providers/gato-service/gato-service';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CareersPage,
    ModulesPage,
    GroupsPage,
    StudentsPage,
    StudentPage,
    StudentListPage,
    SetupPage,
    GravatarPipe,
    CurpPipe,
    EmailPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CareersPage,
    ModulesPage,
    GroupsPage,
    StudentsPage,
    StudentPage,
    StudentListPage,
    SetupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoodleServiceProvider,
    GatoServiceProvider,
    ToastServiceProvider,
    AlertServiceProvider
  ]
})
export class AppModule {}
