import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export  class  FeriadosService {
  
  API_URL  =  'http://nolaborables.com.ar/api/v2/feriados/2016?incluir=opcional';
  
  constructor(private  httpClient:  HttpClient) {}
  
  getFeriados(){
      return  this.httpClient.get(`${this.API_URL}`);
  }
}