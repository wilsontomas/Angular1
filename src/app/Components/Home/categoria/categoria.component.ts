import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Noticias } from 'src/app/Interfaces/Noticias';
import { Source } from 'src/app/Interfaces/Source';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  datosObtenidos:Source={sources:[], status:""};
   paginaActual:number=1;
  terminoDeCategoria:string="general";

  constructor(private servicio:ServicioService,private rutaActiva:ActivatedRoute, private router:Router) {
    //se obtiene el termino por la url
    this.obtenerCategoria();
    //se cargan los datos por categoria
    servicio.obtenerInformacionPorCategoria(this.terminoDeCategoria).subscribe(x=>{
      this.datosObtenidos=x;
      console.log(x);
    });

    //se revisan los eventos para detectar que se cambio la url y se reinician los datos
    router.events.subscribe((evento)=>{
      if(evento instanceof NavigationEnd){
        console.log('cambio la url');
        this.reiniciarInformacion();
      }
    });
   }

  ngOnInit(): void {
  }

  obtenerCategoria(){
    this.rutaActiva.params.subscribe(x=>{ this.terminoDeCategoria=x.nombre;});

  }
  reiniciarInformacion(){
    this.servicio.obtenerInformacionPorCategoria(this.terminoDeCategoria).subscribe(x=>{
      this.datosObtenidos = x;

    });
  }
}
