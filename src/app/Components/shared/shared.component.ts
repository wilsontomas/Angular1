import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServicioService } from '../Home/servicio.service';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  parametroDeBuscqueda:string="";
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
    
  }
  categoriaArticulo=['general','entertainment','business','health','science','sports','technology'];
  categoriaSeleccionada:string ="general";
  buscarNoticias(){
   //alert(this.parametroDeBuscqueda);
    this.router.navigate(['Busqueda',{articulo:this.parametroDeBuscqueda}]);
    
  }
  detectarCambiosEnCategoria(){
    console.log(this.categoriaSeleccionada);
    this.router.navigate(['Categoria',{nombre:this.categoriaSeleccionada}]);
  }
}
