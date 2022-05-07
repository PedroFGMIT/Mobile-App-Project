import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarDetailsPageRoutingModule } from './calendar-details-routing.module';

import { CalendarDetailsPage } from './calendar-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarDetailsPageRoutingModule
  ],
  declarations: [CalendarDetailsPage]
})
export class CalendarDetailsPageModule {}
