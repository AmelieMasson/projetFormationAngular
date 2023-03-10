import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http:HttpClient) { }


  getAllPersonne()
  {
    return this.http.get<Personne[]>("http://localhost:8015/api/personnes")
  }
  

  getPersonneById(id:number)
  {
    return this.http.get<Personne>(`http://localhost:8015/api/personnes/${id}`)
  }

  addPersonne(p:Personne)
  {
    return this.http.post("http://localhost:8015/api/personnes", p)
  }


  modifierPersonne(p:Personne)
  {
    return this.http.put("http://localhost:8015/api/personnes", p)
  }


  deletePersonne(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/personnes/${id}`)
  }


}
