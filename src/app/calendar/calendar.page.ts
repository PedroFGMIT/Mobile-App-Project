import { Component, OnInit } from '@angular/core';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { NavController, Platform } from '@ionic/angular';

//Unfinished Code!!!!!
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
calendars=[];
  constructor(public navCtrl:NavController, private calendar:Calendar, private plt:Platform) {
    this.plt.ready().then(()=> {
      this.calendar.listCalendars().then(data => {
        this.calendar = data;
      })
    })
   }

  ngOnInit() {
  }

  addEvent(cal){

  }

  openEvent(cal){
    
  }

}
