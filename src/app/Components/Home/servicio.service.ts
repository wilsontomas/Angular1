import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {Noticias} from '../../Interfaces/Noticias';
import { Source } from 'src/app/Interfaces/Source';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  //lave de la pagina de noticias
  llave = '0cc3afdd941043c0b6f45da2d5376257';
  //fecha actual
  fecha = Date.now();

  //Se buscan las noticias del dominio de techcrunch
   obtenerInformacion():Observable<Noticias>{  
    return this.http.get<Noticias>("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=publishedAt&apiKey="+this.llave);
  }
  //se buscan las noticias por terminos de busqueda
  obtenerInformacionPorBusqueda(termino:string):Observable<Noticias>{
  
    return this.http.get<Noticias>("https://newsapi.org/v2/everything?q="+termino+"&from="+this.fecha+"&sortBy=publishedAt&apiKey="+this.llave);
  }
  //se busca la informacion por categoria
  obtenerInformacionPorCategoria(categoria:string):Observable<Source>{
    return this.http.get<Source>("https://newsapi.org/v2/sources?category="+categoria+"&apiKey="+this.llave);
  }
// se busca la informacion de las noticias filtradas por pais
  obtenerInformacionPorPais(pais:string):Observable<Source>{
    return this.http.get<Source>("https://newsapi.org/v2/sources?country="+pais+"&apiKey="+this.llave);
  }
  //se busca la informacion de las noticias ordenadas mediante ciertos criterios
 obtenerInformacionOrdenada(orden:string):Observable<Noticias>{
  return this.http.get<Noticias>("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy="+orden+"&apiKey="+this.llave);
 }
 //se ordena la informacion de busqueda
 obtenerInformacionOrdenadaEnBusqueda(orden:string,termino:string):Observable<Noticias>{
  return this.http.get<Noticias>("https://newsapi.org/v2/everything?q="+termino+"&domains=techcrunch.com,thenextweb.com&sortBy="+orden+"&apiKey="+this.llave);
 }
}
