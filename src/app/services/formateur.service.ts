import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService  {

  constructor(private http:HttpClient) { }


  getAllFormateur()
  {
    return this.http.get<Formateur[]>("http://localhost:8015/api/formateurs")
  }

  getFormateurById(id:number)
  {
    return this.http.get<Formateur>(`http://localhost:8015/api/formateurs/${id}`)
  }

  addFormateur(f:Formateur)
  {
    return this.http.post("http://localhost:8015/api/formateurs", f)
  }


  modifierFormateur(f:Formateur)
  {
    return this.http.put("http://localhost:8015/api/formateurs", f)
  }


  deleteFormateur(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/formateurs/${id}`)
  }




}
