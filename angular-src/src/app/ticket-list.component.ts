import { Component, OnInit } from '@angular/core';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent implements OnInit {
  pageTitle = 'Ticket List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTickets = this.listFilter ? this.performFilter(this.listFilter) : this.tickets;
  }

  filteredTickets: Ticket[] = [];
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {

  }


  performFilter(filterBy: string): Ticket[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tickets.filter((ticket: Ticket) =>
      ticket.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      tickets => {
        this.tickets = tickets;
        this.filteredTickets = this.tickets;
      },
      error => this.errorMessage = <any>error
    );
  }
}
