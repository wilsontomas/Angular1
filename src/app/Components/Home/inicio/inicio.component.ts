import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Noticias} from '../../../Interfaces/Noticias';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  datosObtenidos:Noticias={articles:[], status:"", totalResults:0};
  paginaActual:number=1;
 
  constructor(private Servicio:ServicioService) {

   
   Servicio.obtenerInformacion().subscribe(x=>{
     this.datosObtenidos=x;
      console.log(this.datosObtenidos);
      
    });
   
   }
   
  ngOnInit(): void {
  }

}
