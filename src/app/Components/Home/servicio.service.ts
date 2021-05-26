import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {Noticias} from '../../Interfaces/Noticias';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  llave = '0cc3afdd941043c0b6f45da2d5376257';
  fecha = Date.now();
  categoriaArticulo=['business','entertainment','general','health','science','sports','technology'];
  obtenerInformacion():Observable<Noticias>{
    
    return this.http.get<Noticias>("https://newsapi.org/v2/everything?q=tesla&from="+this.fecha+"&sortBy=publishedAt&apiKey="+this.llave);
  }
  
  obtenerInformacionPorBusqueda(termino:string):Observable<Noticias>{
    return this.http.get<Noticias>("https://newsapi.org/v2/everything?q="+termino+"&from="+this.fecha+"&sortBy=publishedAt&apiKey="+this.llave);
  }
 
}
