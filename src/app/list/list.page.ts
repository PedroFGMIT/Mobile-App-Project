import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
 listEntries:string[];
 listItem:string = "";
 mainItem:string = "";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  //Method that deletes(splice) from the list at index (i)
  Delete(i){
    this.listEntries.splice(i, 1);
  }

  //Adds(pushes) a user inputted task onto the list
  addItem(){
    this.listEntries.push(this.listItem);
    this.listItem = "";
  }

  //Sets the item at index(i) as a priority task 
  //Stores it as (mainItem) to be read in elsewhere
  mainEntry(i){
    this.mainItem = this.listEntries[i];
     this.storage.set("mainItem", this.mainItem)
    .then()
    .catch();
  }

  //Stores the current list as (savedList) and saves it for the user
  SaveList(){
    this.storage.create()
    .then(()=>{
      this.storage.set("savedList", this.listEntries)
      .then(()=>{
        //console.log("save");
        this.navCtrl.navigateBack('/home');
      })
      .catch();
    })
    .catch();
  }

  //Reads in the (savedList) upon opening the list page
  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('savedList')
      .then((listEntries)=>{
        this.listEntries = listEntries;
      })
      .catch();
    })
    .catch();
  }

}
