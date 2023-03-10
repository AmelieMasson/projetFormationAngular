import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }



  getAllFormation()
  {
    return this.http.get<Formation[]>("http://localhost:8015/api/formations")
  }

  getFormationById(id:number)
  {
    return this.http.get<Formation>(`http://localhost:8015/api/formations/${id}`)
  }

  getFormationByFormateur(id:number)
  {
    return this.http.get<Formation[]>(`http://localhost:8015/api/formationsParFormateurs/${id}`)
  }

  addFormation(f:Formation)
  {
    return this.http.post("http://localhost:8015/api/formations", f)
  }


  modifierFormation(f:Formation)
  {
    return this.http.put("http://localhost:8015/api/formations", f)
  }


  deleteFormation(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/formations/${id}`)
  }



  getParticipantParFormation(id:number)
  {
   return this.http.get<Participant[]>(`http://localhost:8015/api/participantParFormation/${id}`)
  }
}
