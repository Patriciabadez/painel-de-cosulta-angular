import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardHomeComponent } from './modules/page/dashboard-home/dashboard-home.component';
import { NotasVendasComponent } from './modules/notas-vendas/notas-vendas.component';
import { NotasEntradasComponent } from './modules/notas-entradas/notas-entradas.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'notas-fiscais', component: DashboardHomeComponent },
  { path: 'notas-vendas', component: NotasVendasComponent },
  { path: 'notas-entradas', component: NotasEntradasComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
