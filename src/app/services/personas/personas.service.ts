import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private API_SERVER="http://192.168.1.11:8089/personas/";
  constructor(private httpClient:HttpClient) { }

  public getAllPersonas():Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
  public savePersona(persona:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,persona);
  }
public deletePersona(id:any):Observable<any>{
return this.httpClient.delete(this.API_SERVER+"delete/"+id);
}

}
