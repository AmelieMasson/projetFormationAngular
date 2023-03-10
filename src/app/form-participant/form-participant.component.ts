import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Participant } from '../models/participant';
import { Personne } from '../models/personne';
import { ParticipantService } from '../services/participant.service';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrls: ['./form-participant.component.css']
})
export class FormParticipantComponent implements OnInit{

  

  constructor(private route:ActivatedRoute, private participantService:ParticipantService, private personneService:PersonneService){}

participant!:Participant;
id!:number;
personne!:Personne;

  ngOnInit():void{

    this.participant=new Participant();
    this.id=this.route.snapshot.params['id'];
    this.modifier(this.id);
    

  }

  AjouterParticipant()
  {
    this.participantService.addParticipant(this.participant).subscribe(response=>
      {
     
      this.participant = new Participant});
  }


  modifier(id:number)
  {
    this.personneService.getPersonneById(id).subscribe(response=>{
      this.personne=response;
      let nom=this.personne.nom;
      let prenom=this.personne.prenom;
      let age=this.personne.age;
      let email=this.personne.email;
      this.participant.nom=nom;
      this.participant.prenom=prenom;
      this.participant.age=age;
      this.participant.email=email;
    });
  }

}
