import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './Components/Home/inicio/inicio.component'
import {BusquedaComponent} from './Components/Home/busqueda/busqueda.component';
import { CategoriaComponent } from './Components/Home/categoria/categoria.component';
const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'Busqueda', component:BusquedaComponent},
  {path:'Categoria', component:CategoriaComponent},
  { path: '',   redirectTo: '/Inicio', pathMatch: 'full' },
  {path:'**', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
