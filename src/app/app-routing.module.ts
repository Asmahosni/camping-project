import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { AdminComponent } from './components/admin/admin.component';
import { BeginnerComponent } from './components/beginner/beginner.component';
import { CentersAdminComponent } from './components/centers-admin/centers-admin.component';
import { CentersComponent } from './components/centers/centers.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditCenterComponent } from './components/edit-center/edit-center.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { SingleCenterComponent } from './components/single-center/single-center.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'centers', component: CentersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'beginner', component: BeginnerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent, children: [{
      path: 'centers-admin',
      component: CentersAdminComponent
    },
    {
      path: 'edit-center/:id',
      component: EditCenterComponent
    }, {
      path: 'users-admin',
      component: UsersAdminComponent
    },
    {
      path: 'edit-user/:id',
      component: EditUserComponent
    }
    ]
  },
  { path: 'singleCenter/:id', component: SingleCenterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
