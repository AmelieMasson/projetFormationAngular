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

  addParticipant(f:Participant)
  {
    return this.http.post("http://localhost:8015/api/participants", f)
  }

  modifPersonneParticipant(id:number)
  {
    return this.http.post(`http://localhost:8015/api/modifierPersonneParticipants/${id}`, id)
  }

  getParticipantById(id:number)
  {
    return this.http.get<Participant>(`http://localhost:8015/api/participants/${id}`)
  }

  modifPersonneUtilisateur(id:number)
  {
    return this.http.post(`http://localhost:8015/api/modifierPersonneUtilisateurs/${id}`, id)
  }

}
