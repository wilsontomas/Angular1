import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Noticias} from '../../../Interfaces/Noticias';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  DatosObtenidos:Noticias={articles:[], status:"", totalResults:0};
  paginaActual:number=1;
  constructor(private Servicio:ServicioService) {

   
   Servicio.ObtenerInformacion().subscribe(x=>{
     this.DatosObtenidos=x;
      console.log(this.DatosObtenidos);
    });
   
   }
   
  ngOnInit(): void {
  }

}
