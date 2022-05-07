import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(private camera: Camera, private storage: Storage) { }

  //Allows the user to take a picture
  //Sets the quality of image, save destination, image type and media type
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    //Used to image is being taken in browser
    console.log("Picture Taken");
    this.camera.getPicture(options).then((imageData) => {
      //Adds new picture to the photo gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
        
      });

      //Saves all pictures to be loaded in upon opening the page
      this.storage.set('photos', this.photos);
    }, (err) => {
     
     console.log("Camera issue: " + err);
    });

  }
  //Loads in all saved photos in the gallery
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      console.log("Picture Loaded")
      this.photos = photos || [];
    });
  }

}

class Photo {
  data: any;
}
