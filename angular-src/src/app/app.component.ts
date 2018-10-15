import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" style="color: white"> {{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{ exact: true }"
        [routerLink]="['/landing']">Home</a>
      </li>

      <li><a class="nav-link" routerLinkActive='active' [routerLinkActiveOptions]="{ exact: true }" [routerLink]="['/tickets']">Current Tickets</a></li>

      <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{ exact: true }"
                 [routerLink]="['/tickets', 0, 'edit']">New Ticket</a>
          </li>

    </ul>
  </nav>
  <div class="container" style="margin-top: 3em">
    <router-outlet></router-outlet>
  </div>
`
})
export class AppComponent {
  pageTitle: string = "Ticket Blaster 3000"
}
