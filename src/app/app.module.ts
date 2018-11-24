import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { SearchPage } from '../pages/search/search';
import { ModulesPage } from '../pages/modules/modules';
import { GroupsPage } from '../pages/groups/groups';
import { StudentsPage } from '../pages/students/students';
import { StudentPage } from '../pages/student/student';
import { StudentListPage } from '../pages/student-list/student-list';

import { GravatarPipe } from '../pipes/gravatar/gravatar';
import { CurpPipe } from '../pipes/curp/curp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { UsersProvider } from '../providers/users/users';
import { ModulesProvider } from '../providers/modules/modules';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    SearchPage,
    ModulesPage,
    GroupsPage,
    StudentsPage,
    StudentPage,
    StudentListPage,
    GravatarPipe,
    CurpPipe
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
    ListPage,
    UserPage,
    SearchPage,
    ModulesPage,
    GroupsPage,
    StudentsPage,
    StudentPage,
    StudentListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    UsersProvider,
    ModulesProvider
  ]
})
export class AppModule {}
