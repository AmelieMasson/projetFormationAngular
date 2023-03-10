import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



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
  

  

  constructor(private route:ActivatedRoute, private participantService:ParticipantService, private personneService:PersonneService, private router:Router){}

participant!:Participant;
id!:number;
personne!:Personne;

  ngOnInit():void{

    this.participant=new Participant();
    this.id=this.route.snapshot.params['id'];
   // this.modifier(this.id);
    this.modifierPersoneParticipant(this.id);
    

  }



  Afficher()
  {
    this.router.navigateByUrl("commercial");
  }



  AjouterParticipant()
  {
    this.participantService.addParticipant(this.participant).subscribe(response=>
      {
     
      this.participant = new Participant;
      this.Afficher()});
  }

  modifierPersoneParticipant(id:number)
  {
    this.participantService.modifPersonneUtilisateur(id).subscribe(response=>{
      this.participantService.modifPersonneParticipant(id).subscribe(response=>
      {
          this.participantService.getParticipantById(id).subscribe(response=>this.participant=response);

      })})
  }



  }


