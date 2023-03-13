import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationRequest } from '../models/authentification-request';
import { Utilisateur } from '../models/utilisateur';
import { FormateurService } from '../services/formateur.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  username!:string;
  password!:string;
  utilisateur!:Utilisateur;
  nomRole!:string;
  idFormateur!:number;
  


  ngOnInit(): void {
    this.username="";
    this.password="";
    
    
    
  }

  constructor(private router:Router, private utilisateurService:UtilisateurService, private formateurService:FormateurService)
  {
  
  }


  authentification()
{ 
  let ar:AuthentificationRequest=new AuthentificationRequest(this.username,this.password);
  this.utilisateurService.authFolder(ar).subscribe(
    response=>
    {
      console.log(response.jwt)
      sessionStorage.setItem('token','Bearer '+response.jwt)
      this.utilisateurService.getUtilisateurByUsername(this.username).subscribe(
        response=>
        {this.utilisateur=response;
          this.nomRole=this.utilisateur.role.nom_role;
          sessionStorage.setItem('nomRole',this.nomRole)
          this.idFormateur=this.utilisateur.id;

          switch(this.nomRole)
          {
            case "participant":  this.router.navigateByUrl('participant');
            break;
            case "formateur":  
  
              this.router.navigateByUrl(`afficherFormation/${this.idFormateur}`);
            break;
            case "admin":  this.router.navigateByUrl('afficherFormation');
            break;
            case "commercial":  this.router.navigateByUrl('commercial');
            break;
  
  
          }
        });


       

       
        
        
    },
    erreur=>
    {console.log("Authentification non ok")
      this.username="";
      this.password="";

    }
  )
}


}
