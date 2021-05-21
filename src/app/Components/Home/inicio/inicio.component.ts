import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private Servicio:ServicioService) {

   
   Servicio.ObtenerInformacion().subscribe(x=>console.log(x));
   
   }

  ngOnInit(): void {
  }

}
