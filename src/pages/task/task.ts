import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  index;
  task;
  desc;
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  	this.index = navParams.get('index');
  	this.task = navParams.get('task');
  	this.desc = navParams.get('desc');
  }
  close() {
    this.viewCtrl.dismiss('close');
   }
   save(){
      this.data =[{'task':this.task,'description':this.desc,'index':this.index}];
      console.log(this.data[0].description);
      this.viewCtrl.dismiss(this.data);
   }



}
