import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/home.component';
import { CardModule } from "primeng/card";
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule} from 'primeng/button';
import { ToastModule} from 'primeng/toast';
import {CookieService} from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { DashboardHomeComponent } from './modules/page/dashboard-home/dashboard-home.component';
import { VisualizarNotasComponent } from './modules/page/visualizar-notas/visualizar-notas.component';
import { TesteComponent } from './modules/page/teste/teste.component';
import { NotasVendasComponent } from './modules/notas-vendas/notas-vendas.component';
import { NotasEntradasComponent } from './modules/notas-entradas/notas-entradas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardHomeComponent,
    VisualizarNotasComponent,
    TesteComponent,
    NotasVendasComponent,
    NotasEntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule

  ],
  providers: [CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
