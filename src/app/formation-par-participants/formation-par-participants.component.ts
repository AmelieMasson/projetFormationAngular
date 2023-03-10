import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-formation-par-participants',
  templateUrl: './formation-par-participants.component.html',
  styleUrls: ['./formation-par-participants.component.css']
})
export class FormationParParticipantsComponent implements OnInit {

  
idForm!:number
formations!:Formation[]
 
constructor(private route:ActivatedRoute, private fservice:FormationService,private pservice:ParticipantService,private router:Router) {
}



  ngOnInit(): void {
    
this.idForm=this.route.snapshot.params['id'];
 console.log(this.idForm)
    this.fservice.getFormationById2(this.idForm).subscribe(
      response=>this.formations=response
    )

  }


}
