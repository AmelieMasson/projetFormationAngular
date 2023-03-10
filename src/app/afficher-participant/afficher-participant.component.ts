import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../models/participant';
import { FormationService } from '../services/formation.service';


@Component({
  selector: 'app-afficher-participant',
  templateUrl: './afficher-participant.component.html',
  styleUrls: ['./afficher-participant.component.css']
})
export class AfficherParticipantComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private formationService:FormationService){}
  
  participants!:Participant[];
  idFormation!:number;
  id!:number;

  ngOnInit(): void {
    this.idFormation=this.route.snapshot.params['idFormation']
    this.afficherParticipants(this.idFormation);
  }

  afficherParticipants(idFormation:number)
  {
    this.formationService.getParticipantParFormation(this.idFormation).subscribe(response=> this.participants=response)
  }



}
