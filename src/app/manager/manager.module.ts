import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { Routes } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';

export const managerModuleRoutes: Routes = [
  { path: '', component: ManagerHomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
