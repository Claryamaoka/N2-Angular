import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardsComponent } from './dashboards/dashboards/dashboards.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento/gerenciamento.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { HeaderComponent } from './header/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    GerenciamentoComponent,
    CadastroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
