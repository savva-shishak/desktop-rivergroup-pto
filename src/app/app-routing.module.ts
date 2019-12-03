import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmplsComponent } from './pages/empls/empls.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { MaterialsComponent } from './pages/materials/materials.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'empls',
    component: EmplsComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },
  {
    path: 'equipments',
    component: EquipmentsComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
