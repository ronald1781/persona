import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private API_SERVER="http://192.168.1.11:8089/estados/";
  constructor(
    private httpClient:HttpClient
  ) { }

  public getAllEstadosByPais(idPais: string):Observable<any>{
    return this.httpClient.get(this.API_SERVER+idPais);
  }

}
