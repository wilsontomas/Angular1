import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './Components/Home/inicio/inicio.component'
const routes: Routes = [
  {path:'Inicio', component:InicioComponent},
  {path:'**', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
