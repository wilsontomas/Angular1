import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Source } from 'src/app/Interfaces/Source';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  datosObtenidos:Source={sources:[], status:""};
   paginaActual:number=1;
  terminoDePais:string="us";

  constructor(private servicio:ServicioService,private rutaActiva:ActivatedRoute, private router:Router) {
    this.obtenerPais();
    this.reiniciarInformacion();
    router.events.subscribe((evento)=>{
      if(evento instanceof NavigationEnd){
        console.log('cambio la url de pais');
        this.reiniciarInformacion();
      }
    });
   }
   obtenerPais(){
    this.rutaActiva.params.subscribe(x=>{ this.terminoDePais=x.Pais;});

  }

  reiniciarInformacion(){
    this.servicio.obtenerInformacionPorPais(this.terminoDePais).subscribe(x=>{
      this.datosObtenidos = x;

    });
  }
  ngOnInit(): void {
  }

}
