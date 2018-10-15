import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { TicketListComponent } from './ticket-list.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketEditComponent } from './ticket-edit.component';
import { TicketDetailGuard } from './ticket-detail.guard';
import { TicketEditGuard } from './ticket-edit.guard';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'tickets', component: TicketListComponent },
      {
        path: 'tickets/:id',
        canActivate: [ TicketDetailGuard],
        component: TicketDetailComponent
      },
      {
        path: 'tickets/:id/edit',
        canDeactivate: [ TicketEditGuard ],
        component: TicketEditComponent
      },
    ])
  ],
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    TicketEditComponent
  ]
})
export class TicketModule { }
