import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  parametroDeBuscqueda:string="";
  constructor(private router:Router, private rutaActiva:ActivatedRoute) { 

  }

  ngOnInit(): void {
    
  }
  
  buscarNoticias(){
   //alert(this.parametroDeBuscqueda);
    this.router.navigate(['Busqueda',{articulo:this.parametroDeBuscqueda}]);
    
  }
}
