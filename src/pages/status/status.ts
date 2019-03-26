import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage'; //import the storage for the page 

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  status:string; //creating a viable to store the status

  constructor(public navCtrl: NavController, public navParams: NavParams ,private storage:Storage) { //adding the private storage to the constructor to store the result
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  saveButton()
  {
    
    console.log(this.status);
    this.storage.set("status", this.status);
    this.navCtrl.pop(); //like a back button
  }
}
