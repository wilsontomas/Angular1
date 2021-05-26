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

  @Input() Datos:Categoria={description:"",url:"", name:"", id:"", category:"", country:"",language:""};
  verNoticia(url:string){
    window.open(url);
  }
}
