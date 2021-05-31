import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Interfaces/Categoria';

@Component({
  selector: 'app-carta-categoria',
  templateUrl: './carta-categoria.component.html',
  styleUrls: ['./carta-categoria.component.css']
})
export class CartaCategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    //obtenemos la fecha actual del sistema
  fecha = Date.now();
  //variable por la cual se envia informacion desde el componente padre al hijo
  @Input() Datos:Categoria={description:"",url:"", name:"", id:"", category:"", country:"",language:""};
  //metodo que abre una pestana nueva con la noticia
  verNoticia(url:string){
    window.open(url);
  }
}
