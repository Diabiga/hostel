import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { DetailComponent } from './detail/detail.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';


const routes: Routes = [
   {path: '',component: HomeComponent},
   {path: 'detail',component: DetailComponent},
   {path: 'createAnnonce',component: CreateAnnonceComponent},
   {path: '**',component:ErrorComponentComponent}
  /* 
   {path: 'profile',component: ProfileComponent},
   {path: 'createAnnonce',component: DetailComponent},
   {path: 'detail',component: HomeComponent},
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
