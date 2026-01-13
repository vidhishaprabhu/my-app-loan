import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoanApplicationFormComponent } from './components/loan-application-form/loan-application-form.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'apply-loan',component:LoanApplicationFormComponent
  },
  {
    path:'loan-list',component:LoanListComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'**',redirectTo:''
  }
];
