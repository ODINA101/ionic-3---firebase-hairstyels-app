import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase } from 'angularfire2/database';
import { ViewPage } from "../../pages/view/view";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   items = [];

  constructor(public navCtrl: NavController,public afd:AngularFireDatabase) {
    this.afd.list('/women').subscribe(data =>{
    	this.items = data;
    });
  }




view(title,link) {

this.navCtrl.push(ViewPage,{
	title:title,
	link:link
});

}
}