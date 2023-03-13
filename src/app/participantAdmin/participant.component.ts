import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationComponent } from '../formationAdmin/formation.component';


import { Participant } from '../models/participant';

import { ParticipantService } from '../services/participant.service';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})

export class ParticipantComponent implements OnInit {




  constructor(private fService:FormationService,private pservice:ParticipantService, private fservice:FormationService,private router:Router)
  {

  }
  ngOnInit(): void {
   
    this.AfficherParticipant();
    this.AfficherAll();

  }

formation!:Formation
formations!:Formation[]

  participants!:Participant[]

  AfficherAll()
    {
      this.fService.getAllFormation().subscribe(response=>this.formations=response)
    }
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
