import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleGuard } from './services/role.guard';
import { PolicyCreateComponent } from './policy/policy-create/policy-create.component';
import { PolicyListComponent } from './policy/policy-list/policy-list.component';
import { PolicyViewComponent } from './consumer/policy-view/policy-view.component';
import { PolicyRequestComponent } from './consumer/policy-request/policy-request.component';
import { PolicyEditComponent } from './policy/policy-edit/policy-edit.component';
import { CreateBusinessComponent } from './consumer/create-business/create-business.component';
import { CreatePropertyComponent } from './consumer/create-property/create-property.component';
import { ViewBusinessComponent } from './consumer/view-business/view-business.component';
import { ViewPropertyComponent } from './consumer/view-property/view-property.component';



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { role: 'user' } },



    // { path: 'create-policy', component: PolicyCreateComponent, canActivate: [RoleGuard], data: { role: 'admin' } },

    { path: 'createPolicy', component: PolicyCreateComponent},

    { path: 'policies', component: PolicyListComponent },

    { path: 'policy/:id', component: PolicyViewComponent },

      { path: 'consumer/createBusiness', component: CreateBusinessComponent },
      { path: 'consumer/createProperty', component: CreatePropertyComponent },
      {path: 'consumer/viewProperty',component : ViewPropertyComponent},
      {path: 'consumer/viewBusiness', component: ViewBusinessComponent},
      { path: 'user/policies/request', component: PolicyRequestComponent},


    // { path: 'consumer/list', component: ConsumerListComponent },
    
/*
        // Admin routes
  { path: 'admin/policies', component: PolicyListComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'admin/policies/create', component: PolicyCreateComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'admin/policies/edit/:id', component: PolicyEditComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },

  // User routes
  { path: 'user/policies/view/:id', component: PolicyViewComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'user/policies/request', component: PolicyRequestComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
*/

   
    
];
