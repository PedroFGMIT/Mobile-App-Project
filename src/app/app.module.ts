import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [Calendar, Camera, Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
