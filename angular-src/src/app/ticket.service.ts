import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private ticketsUrl = `dash/tickets`;

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getTicket(_id: any): Observable<Ticket> {
    if (_id == 0) {
      return of(this.initializeTicket());
    }
    const url = `${this.ticketsUrl}/${_id}`;
    return this.http.get<Ticket>(url)
      .pipe(
        tap(data => console.log('getTicket: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    ticket._id = null;
    return this.http.post<Ticket>(this.ticketsUrl, ticket, { headers: headers })
      .pipe(
        tap(data => console.log('createTicket: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteTicket(id: any): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.delete<Ticket>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteTicket: ' + id)),
        catchError(this.handleError)
      );
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.ticketsUrl}/${ticket._id}`;
    return this.http.put<Ticket>(url, ticket, { headers: headers })
      .pipe(
        tap(() => console.log('updateTicket: ' + ticket._id)),
        // Return the ticket on an update
        map(() => ticket),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeTicket(): Ticket {
    // Return an initialized object
    return {
      _id: 0,
      title: null,
      description: null,
      status: null,
      department: null,
      notes: null
    };
  }
}
