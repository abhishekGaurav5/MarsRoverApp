import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoverDetailsComponent } from './rover-details/rover-details.component';

const routes: Routes = [
  {
    path: 'rover-details/:rover',
    component: RoverDetailsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
