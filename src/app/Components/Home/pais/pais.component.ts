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
    //al cargar la pagina se obtiene el parametro del pais y se llama al metodo que llena la informacion
    this.obtenerPais();
    this.reiniciarInformacion();
    //cuando se desencadena el evento NavigationEnd al cambiar la url, se vuelve a llamar el metodo que reinicia la informacion de la noticia
    router.events.subscribe((evento)=>{
      if(evento instanceof NavigationEnd){
        //console.log('cambio la url de pais');
        this.reiniciarInformacion();
      }
    });
   }
   //obtenemos el nombre del pais por la url
   obtenerPais(){
    this.rutaActiva.params.subscribe(x=>{ this.terminoDePais=x.Pais;});

  }
  //con este metodo llenamos la informacion de la variable de noticias (datosObtenidos)
  reiniciarInformacion(){
    this.servicio.obtenerInformacionPorPais(this.terminoDePais).subscribe(x=>{
      this.datosObtenidos = x;

    });
  }
  ngOnInit(): void {
  }

}
