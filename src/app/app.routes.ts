import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HorsesComponent } from './components/horses/horses.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentsComponent } from './components/appointment/appointment.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'appointment', component:AppointmentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'horses', component: HorsesComponent },
    { path: 'signup', component: SignupComponent },
    {path:'signin', component:SigninComponent},
    {path:'dashboard', component:AdminDashboardComponent},
    { path: '**', redirectTo: '' } 
];
