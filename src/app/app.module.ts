import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/Home/inicio/inicio.component';
import {ServicioService} from './Components/Home/servicio.service';

import {HttpClientModule} from '@angular/common/http';
import { CartaComponent } from './Components/carta/carta.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedComponent } from './Components/shared/shared.component';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './Components/Home/busqueda/busqueda.component';
import { CategoriaComponent } from './Components/Home/categoria/categoria.component';
import { CartaCategoriaComponent } from './Components/carta-categoria/carta-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CartaComponent,
    SharedComponent,
    BusquedaComponent,
    CategoriaComponent,
    CartaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
