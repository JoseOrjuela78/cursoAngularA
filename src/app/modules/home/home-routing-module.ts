import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { ActivitiesPage } from './pages/activities/activities.page';
import { CanActivateGuard } from 'src/app/shared/services/CanActiveGuard';

const routes: Routes = [
  {path:'', component: MenuComponent,
  canActivate:[CanActivateGuard],
children:[
  {
    path:'',
    redirectTo:'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: HomePage
  },
  {
    path: 'activities',
    component: ActivitiesPage
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
