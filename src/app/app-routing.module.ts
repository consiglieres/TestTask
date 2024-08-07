import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.page';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.page';
import { MapComponent } from './pages/map/map.page';
import { ErrorComponent } from './pages/error/error.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list', 
    component: ListComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailComponent,
  },
  {
    path: 'map', component: MapComponent,
  },
  {
    path: '**', component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
