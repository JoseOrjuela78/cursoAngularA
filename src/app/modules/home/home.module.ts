import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { HomeRoutingModule } from './home-routing-module';
import { ActivitiesPage } from './pages/activities/activities.page';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePage,
    ActivitiesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class HomeModule { }
