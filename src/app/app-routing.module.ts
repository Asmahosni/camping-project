import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { AdminComponent } from './components/admin/admin.component';
import { CentersAdminComponent } from './components/centers-admin/centers-admin.component';
import { CentersComponent } from './components/centers/centers.component';
import { EditCenterComponent } from './components/edit-center/edit-center.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleCenterComponent } from './components/single-center/single-center.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'centers', component: CentersComponent },
  { path: 'add-center', component: AddCenterComponent },
  {
    path: 'admin', component: AdminComponent, children: [{
      path: 'centers-admin',
      component: CentersAdminComponent
    },
    {
      path: 'edit-center/:id',
      component: EditCenterComponent
    }]
  },
  {path : 'singleCenter/:id',component : SingleCenterComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
