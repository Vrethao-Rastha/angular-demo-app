import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TicketEditComponent } from './ticket-edit.component';

@Injectable({
  providedIn: 'root'
})
export class TicketEditGuard implements CanDeactivate<TicketEditComponent> {
  canDeactivate(component: TicketEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.ticketForm.dirty) {
      const ticketName = component.ticketForm.get('ticketTitle').value || 'New Ticket';
      return confirm(`Navigate away and lose all changes to ${ticketName}?`);
    }
    return true;
  }
}
