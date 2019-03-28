import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';
import { ClientDataService } from './client-data/client-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientMaintenanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ClientDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
