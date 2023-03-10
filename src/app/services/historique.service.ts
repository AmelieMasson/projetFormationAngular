import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historique } from '../models/historique';
import { Rdv } from '../models/rdv';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http:HttpClient) { }


  getAllHistorique()
  {
    return this.http.get<Historique[]>("http://localhost:8015/api/historiques")
  }
  

  getHistoriqueById(id:number)
  {
    return this.http.get<Historique>(`http://localhost:8015/api/historiques/${id}`)
  }

  getHistoriquesByIdPersonne(id:number)
  {
    return this.http.get<Historique[]>(`http://localhost:8015/api/historiquesByIdPersonne/${id}`)
  }

  addhistorique(f:Historique)
  {
    return this.http.post("http://localhost:8015/api/historiques", f)
  }


  modifierhistorique(f:Historique)
  {
    return this.http.put("http://localhost:8015/api/historiques", f)
  }


  deletehistorique(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/historiques/${id}`)
  }

}
