import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Datos} from '../../Interfaces/datos'
import {Noticias} from '../../Interfaces/Noticias';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  url = '0cc3afdd941043c0b6f45da2d5376257';
  ObtenerInformacion():Observable<Noticias>{
    return this.http.get<Noticias>("https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey="+this.url);
  }
 
}
