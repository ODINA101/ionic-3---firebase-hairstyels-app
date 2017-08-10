import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ViewPage } from "../../pages/view/view";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


items = [];

  constructor(public navCtrl: NavController,public afd:AngularFireDatabase) {
  	this.afd.list('/men').subscribe(_data => {
  		this.items = _data;

  	});

  }

view(title,link) {

this.navCtrl.push(ViewPage,{
	title:title,
	link:link
});

}


}
