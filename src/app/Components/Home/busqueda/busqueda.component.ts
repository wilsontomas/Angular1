import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Noticias } from 'src/app/Interfaces/Noticias';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private router:Router,private Servicio:ServicioService,private rutaActiva:ActivatedRoute) {
    //al cargar la pagina se obtiene el parametro de la url
    this.obtenerParametros();
    //se llena la variable de las noticias
    this.reiniciarInformacion();
    
   //se revisan los eventos para detectar que se cambio la url y se reinician los datos
    router.events.subscribe((evento)=>{
      if(evento instanceof NavigationEnd){
        //console.log('cambio la url');
        this.reiniciarInformacion();
      }
    });
   }

   
   //se declara la variable que contendra los datos
   datosObtenidos:Noticias={articles:[], status:"", totalResults:0};
   termino:string="";
   paginaActual:number=1;
   ordenamientos:string[] = ['publishedAt','relevancy', 'popularity'];
  ordenActual:string ="publishedAt";
  //Se obtiene el parametro 'termino' de la url
   obtenerParametros(){
    this.rutaActiva.params.subscribe(x=>{ this.termino=x.articulo;console.log(this.termino);});
  }
//se solicita la informacion del servidor mediante el termino de busqueda
  reiniciarInformacion(){
    this.Servicio.obtenerInformacionPorBusqueda(this.termino).subscribe(x=>{
      this.datosObtenidos = x;
    });
  }
  //se vuelve a llenar la variable de las noticias con la informacion filtrada 'ordenamiento'
  filtrarInformacionConTermino(){
    //alert(this.ordenActual);
    this.Servicio.obtenerInformacionOrdenadaEnBusqueda(this.ordenActual,this.termino).subscribe(x=>{
      this.datosObtenidos = x;
    });
   }

  
  ngOnInit(): void {
  }

}
