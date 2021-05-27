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
  @Input() Datos:Datos={author:"", content:"", description:"", title:"", url:"", urlToImage:""};
  fecha = Date.now();
  ngOnInit(): void {
    
  }
  verificarImagen(datos:any){
    if(datos ==null || datos=="null"){
      return "assets/image/news.png";
      }  
      return datos; 
  }
  
  verNoticia(url:string){
    window.open(url);
  }
  
}
