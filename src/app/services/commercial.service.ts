import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private http:HttpClient) { }


  afficherAllCommercial()
  {
    return this.http.get<Commercial[]>('http://localhost:8015/api/commerciaux')
  }
}
