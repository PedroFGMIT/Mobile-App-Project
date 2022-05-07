import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarDetailsPage } from './calendar-details.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarDetailsPageRoutingModule {}
