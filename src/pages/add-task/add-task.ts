import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  Task="";
  Description="";
  data=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.data = this.navParams.data;
  }

  close() {
		this.viewCtrl.dismiss("close");
   }
   save(){
   		this.data =[{'task':this.Task,'description':this.Description}];
      this.viewCtrl.dismiss(this.data);
   }
}