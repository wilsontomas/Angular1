import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Datos} from '../../Interfaces/datos'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  ObtenerInformacion():Observable<Datos>{
    return this.http.get<Datos>("https://pokeapi.co/api/v2/pokemon/ditto");
  }
}
