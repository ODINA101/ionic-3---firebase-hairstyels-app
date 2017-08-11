import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

title = "";
link = "";



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {


    this.title = this.navParams.get('title');
    this.link = this.navParams.get('link');

  }

}
