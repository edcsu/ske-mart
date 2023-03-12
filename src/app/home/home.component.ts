import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container text-center">
      <div class="row">
        <div class="col-3 p-3">
          <button type="button" class="btn btn-primary" routerLink="/manager">
            Login as manager
            <i class="fa fa-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
