import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { Participant } from '../models/participant';
import { FormationService } from '../services/formation.service';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-gestion-participant',
  templateUrl: './gestion-participant.component.html',
  styleUrls: ['./gestion-participant.component.css']
})
export class GestionParticipantComponent {

   

  constructor(private route:ActivatedRoute, private participantService:ParticipantService, 
    private router:Router, private pService:ParticipantService, private fService:FormationService){}

participant!:Participant;
id!:number;
formations!:Formation[];
idFormation!:number;
formation!:Formation;
formationsdisponible!:Formation[]


  ngOnInit():void{

    this.participant=new Participant();
    this.id=this.route.snapshot.params['id']; 
    this.AfficherFormationParticipant(this.id);
    this.AfficherFormationDisponible();
  }

  AfficherFormationDisponible(){
    this.fService.getAllFormation().subscribe(response=>this.formationsdisponible=response)
  }


  AfficherFormationParticipant(id:number){
  this.fService.getFormationById2(this.id).subscribe(
    response=>this.formations=response
  )
  }

  attribuerFormation()
{
  
  this.pService.getParticipantById(this.id).subscribe(
    response=>
    { 
      this.participant=response
      this.fService.getFormationById(this.idFormation).subscribe(response=>{


        this.formation=response
        this.formations.splice(1,0,this.formation)
        this.participant.formations=this.formations
        this.pService.addParticipant(this.participant).subscribe(
          response=>this.AfficherFormationParticipant(this.id))
        
      
      })
      
      
      
      
    }
  )
  }

}
