import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  currentImage: any;
  lat:any;
  long:any;
  constructor(public photoService: PhotoService, private geolocation: Geolocation) {  }

  //Uses the photo service to load in saved pictures
  ngOnInit() {
    this.photoService.loadSaved();
  }

  //Method to get users current location
  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
