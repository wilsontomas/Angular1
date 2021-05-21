import { Component, OnInit , Input} from '@angular/core';
import {Datos} from '../../Interfaces/datos';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  constructor() { }
  @Input() Datos:Datos={author:"", content:"", description:"", title:"", url:"", urlToImage:""};
  ngOnInit(): void {
  }

}
