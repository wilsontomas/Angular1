import { Component, OnInit , Input} from '@angular/core';

import {Datos} from '../../Interfaces/datos';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  constructor() { 
    
    
  }
    //variable por la cual se envia informacion desde el componente padre al hijo
  @Input() Datos:Datos={author:"", content:"", description:"", title:"", url:"", urlToImage:""};
  //obtenemos la fecha actual del sistema
  fecha = Date.now();
  ngOnInit(): void {
    
  }
  //con este metodo verificamos que la imagen por defecto aparesca si la url de la imagen es nula
  verificarImagen(datos:any){
    if(datos ==null || datos=="null"){
      return "assets/image/news.png";
      }  
      return datos; 
  }
    //metodo que abre una pestana nueva con la noticia
  verNoticia(url:string){
    window.open(url);
  }
  
}
