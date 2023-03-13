import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient) { }

  getAllParticipant()
  {
    return this.http.get<Participant[]>("http://localhost:8015/api/participants")
  }


  getParticipantsById(id:number)
  {
    return this.http.get<Participant>(`http://localhost:8015/api/participants/${id}`)
  }

 


  modifierParticipant(participant:Participant)
  {
    return this.http.put("http://localhost:8015/api/participants", participant)
  }


  deleteParticipant(id:number)
  {
    return this.http.delete(`http://localhost:8015/api/participants/${id}`)
  }






  addParticipant(f:Participant)
  {
    return this.http.post("http://localhost:8015/api/participants", f)
  }


  
 

  modifPersonneUtilisateur(id:number)
  {
    return this.http.post(`http://localhost:8015/api/modifierPersonneUtilisateurs/${id}`, id)
  }


}
