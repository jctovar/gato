import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CareersPage } from '../pages/careers/careers';
import { SearchStudentsPage } from '../pages/search-students/search-students';
import { SetupPage } from '../pages/setup/setup';

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
    SearchStudentsPage,
    SetupPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CareersPage,
    SearchStudentsPage,
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
