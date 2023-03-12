import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <div class="card text-center my-4 border border-0">
        <img height="500" src="/assets/back_home.svg" class="card-img-top" alt="back to home">
        <h5 class="card-title">This page doesn't exist</h5>
        <div class="card-body">
          <p class="card-text">
            <a class="btn btn-primary" routerLink="/home">Go back home</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
