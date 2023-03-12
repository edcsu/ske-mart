import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-primary my-0">
          <div class="container">
            <button type="button" class="btn btn-light" 
              routerLink="/manager/home" routerLinkActive="active-link" >
              Manager's Dashboard
            </button>
            <button type="button" class="btn btn-light" 
              routerLink="/manager/users" routerLinkActive="active-link" >
              User Management
            </button>
            <button type="button" class="btn btn-light" 
              routerLink="/manager/receipts" routerLinkActive="active-link" >
              Receipt Lookup
            </button>
          </div>
        </nav>
        <router-outlet></router-outlet>
      </div>
  `,
  styles: [
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ]
})
export class ManagerComponent {

}
