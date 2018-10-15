import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  templateUrl: './ticket-detail.component.html',
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Ticket Detail';
  errorMessage = '';
  ticket: Ticket | undefined;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getTicket(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTicket(id: any) {
    this.ticketService.getTicket(id).subscribe(
      ticket => this.ticket = ticket,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/tickets']);
  }

}
