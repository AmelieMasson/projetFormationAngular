import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rdv } from '../models/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http:HttpClient) { }

  getAllRdv()
  {
    return this.http.get<Rdv[]>("http://localhost:8015/api/rdvs")
  }
  

  getRdvById(id:number)
  {
    return this.http.get<Rdv>(`http://localhost:8015/api/rdvs/${id}`)
  }

  getRdvsByIdPersonne(id:number)
  {
    return this.http.get<Rdv[]>(`http://localhost:8015/api/rdvsByIdPersonne/${id}`)
  }




  addRdv(f:Rdv)
  {
    return this.http.post("http://localhost:8015/api/rdvs", f)
  }


  modifierRdv(f:Rdv)
  {
    return this.http.put("http://localhost:8015/api/rdvs", f)
  }


  deleteRdv(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/rdvs/${id}`)
  }
}
