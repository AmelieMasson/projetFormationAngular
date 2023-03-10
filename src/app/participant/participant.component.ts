import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationComponent } from '../formation/formation.component';

import { Formation } from '../models/formation';
import { Participant } from '../models/participant';
import { FormationService } from '../services/formation.service';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export default class ParticipantComponent implements OnInit {


  constructor(private pservice:ParticipantService, private fservice:FormationService,private router:Router)
  {

  }
  ngOnInit(): void {
   
    this.AfficherParticipant()

  }

formation!:Formation
formations!:Formation[]

  participants!:Participant[]
  AfficherParticipant()
  {
  
  
    this.pservice.getAllParticipant().subscribe(
      response=>this.participants=response
  
    )
  }
  
  
  supprimeParticipant(id:number)
  {
    this.pservice.deleteParticipant(id).subscribe(
  response=>this.AfficherParticipant()
    )
  }
  
  afficherFormationParticipant(id:number)
{
  this.router.navigateByUrl(`afficherFormationParParticipant/${id}`);
}
 
  
  
    

}
