import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AddTaskPage } from '../add-task/add-task';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks=[];
  constructor(public navCtrl: NavController,private storage: Storage, public modalCtrl: ModalController) {
  }
  
  AddTaskModal(){
	  let AddtModal = this.modalCtrl.create(AddTaskPage,{
	  buttons: [{
      text: 'enter',
      role: 'cancel'
      }]
	  });
	  AddtModal.present();
	  AddtModal.onDidDismiss(data => {
	  		if(data != 'close'){
		  		this.tasks.push(data);
	  		}
	  	})
	}
	TaskModal(index,task,desc){
		let taskModal = this.modalCtrl.create(TaskPage,{'index':index,'task':task,'desc':desc})
		taskModal.present();
		taskModal.onDidDismiss(data => {
	  		if(data != 'close'){
		  		this.tasks[index] = [{"task":data[0].task,"description":data[0].description}];
	  		}
	  		console.log(this.tasks);
	  	})
	}
	deleteTask(index){
		this.tasks.splice(index,1);
	}
}

