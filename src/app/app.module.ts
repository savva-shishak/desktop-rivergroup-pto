import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { EmplsComponent } from './pages/empls/empls.component';
import { WorkComponent } from './layouts/work/work.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { InfoEmplComponent } from './components/info-empl/info-empl.component';
import { InfoEquipComponent } from './components/info-equip/info-equip.component';
import { WindowsModule } from './windows/windows.module';
import { UiService } from './services/ui.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { XhrInterceptor } from './interseptors';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmplsComponent,
    WorkComponent,
    ContractsComponent,
    EquipmentsComponent,
    MaterialsComponent,
    InfoEmplComponent,
    InfoEquipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatProgressSpinnerModule,
    WindowsModule,
    MatDialogModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UiService,
    StoreService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
