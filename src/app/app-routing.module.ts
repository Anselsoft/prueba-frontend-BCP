import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component'
import { AgenciesComponent } from './agencies/agencies.component'
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';

const routes: Routes = [
  {path: '', component: LoadingComponent},
  {path: 'agencies', component: AgenciesComponent},
  {path: 'detail/:id', component: AgencyDetailComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'failed', component: FailedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
