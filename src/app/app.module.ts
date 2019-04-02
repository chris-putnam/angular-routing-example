import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';
import { ClientDataService } from './client-data/client-data.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    ClientMaintenanceComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ClientDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
