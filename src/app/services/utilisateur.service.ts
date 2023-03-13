import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationRequest } from '../models/authentification-request';
import { AuthentificationResponse } from '../models/authentification-response';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }


 


authFolder(authentificationRequest:AuthentificationRequest)
{
  return this.http.post<AuthentificationResponse>('http://localhost:8015/loginUserJwt',authentificationRequest);


}


getUtilisateurByUsername(username:String)
{
  return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/${username}`)
}

}
