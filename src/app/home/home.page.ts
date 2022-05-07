import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
mainEntry:string = "";
  constructor(private storage:Storage) {}

  //Method used to read in stored data(mainItem) from the list page.
  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('mainItem')
      .then((mainItem)=>{
        this.mainEntry = mainItem;
      })
      .catch();
    })
    .catch();
  }

}
