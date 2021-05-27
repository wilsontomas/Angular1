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
  paises=['ae','ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za'];
  paisSeleccionado ="us";
  categoriaArticulo=['general','entertainment','business','health','science','sports','technology'];
  categoriaSeleccionada:string ="general";
  buscarNoticias(){
   //alert(this.parametroDeBuscqueda);
    this.router.navigate(['Busqueda',{articulo:this.parametroDeBuscqueda}]);
    
  }
  detectarCambiosEnCategoria(){
    //console.log(this.categoriaSeleccionada);
    this.router.navigate(['Categoria',{nombre:this.categoriaSeleccionada}]);
  }
  detectarCambiosEnPais(){
    this.router.navigate(['Pais', {Pais:this.paisSeleccionado}]);
  }
}
