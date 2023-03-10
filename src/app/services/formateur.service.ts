import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../models/formateur';
import { Formation } from '../models/formation';

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

  addFormateur(formateur:Formateur)
  {
    return this.http.post("http://localhost:8015/api/formateurs", formateur)
  }


  modifierFormateur(formateur:Formateur)
  {
    return this.http.put("http://localhost:8015/api/formateurs", formateur)
  }


  deleteFormateur(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/formateurs/${id}`)
  }

  selectById(id:number)
  {
    return this.http.get<Formateur>(`http://localhost:8015/api/formateurs/${id}`)
  }

  getFormationById(id:number){

    return this.http.get<Formation[]>(`http://localhost:8015/api/formationsParFormateurs/${id}`)

}
}
