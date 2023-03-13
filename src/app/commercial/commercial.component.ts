import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../models/participant';
import { Personne } from '../models/personne';
import { ParticipantService } from '../services/participant.service';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit{


  constructor(private personneService:PersonneService, private router:Router, private participantService:ParticipantService){}

  personnes!:Personne[];
  participants!:Participant[];
  personne!:Personne;


  ngOnInit():void{

    this.AfficherAll();
    this.AfficherAllParticipant();
    this.personne=new Personne();
    

  }

  AfficherAll()
  {
    this.personneService.getAllPersonne().subscribe(response=>this.personnes=response)
  }

  Afficher(id:number)
  {
    this.router.navigateByUrl(`prospect/${id}`);
  }

  Afficher2(id:number)
  {
    this.router.navigateByUrl(`form/${id}`);
  }

  Supprimer(id:number)
  {
    this.personneService.deletePersonne(id).subscribe(response=>{this.AfficherAll(); this.AfficherAllParticipant()});
  }

  AfficherAllParticipant()
  {
    this.participantService.getAllParticipant().subscribe(response=>this.participants=response)
  }

  AjouterPersonne()
  {
    this.personneService.addPersonne(this.personne).subscribe(response=>
      {
      this.AfficherAll();
      this.AfficherAllParticipant();
      this.personne= new Personne});
  }

  deconnect()
{
  sessionStorage.removeItem('token')
  this.router.navigateByUrl('auth')
}
  

}
