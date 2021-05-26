import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private servicio:ServicioService,private rutaActiva:ActivatedRoute) {
    this.obtenerCategoria();
    servicio.obtenerInformacionPorCategoria(this.terminoDeCategoria).subscribe(x=>{
      this.datosObtenidos=x;
      console.log(x);
    });
   }

  ngOnInit(): void {
  }

  obtenerCategoria(){
    this.rutaActiva.params.subscribe(x=>{ this.terminoDeCategoria=x.nombre;console.log(this.terminoDeCategoria);});

  }
}
