import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/Home/inicio/inicio.component';
import {ServicioService} from './Components/Home/servicio.service';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
