import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientManagementComponent,
    // this means only match the path "clients" exactly, dont match "clients/anything-else"
    pathMatch: 'full',
  },
  {
    path: 'clients/:id',
    component: ClientMaintenanceComponent,
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
