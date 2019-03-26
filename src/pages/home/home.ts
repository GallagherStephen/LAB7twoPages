import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage} from '@ionic/storage'; //importing storage for the page

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  information:string;

  constructor(public navCtrl: NavController, private storage:Storage) { //adding the private storage t see the result of the storage

  }
  homeButtonMethod()
  {
    this.navCtrl.push('StatusPage');
  }

  ionViewWillEnter() //to return the value ,happy,sad,lazy etc..
  {
  this.storage.get("status").then((val) => {                     //status being the key which is in status.ts in line 32! "status"
  this.information = val;
  }).catch((err)=>{
    console.log(err);
  });
}
  

  }
