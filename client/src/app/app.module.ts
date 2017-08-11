import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import  {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { ViewPage } from "../pages/view/view";




const firebaseConfig = {
  apiKey: "AIzaSyAixbDUFcsIGvuDJGiWqqxrpQN4Jdkemec",
    authDomain: "hairstyles-ed82f.firebaseapp.com",
    databaseURL: "https://hairstyles-ed82f.firebaseio.com",
    projectId: "hairstyles-ed82f",
    storageBucket: "",
    messagingSenderId: "862288762723"

};



@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ViewPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
