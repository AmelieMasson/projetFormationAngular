import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit{

    constructor(private fService:FormationService){}

    formations!:Formation[];
 
  
    ngOnInit():void{

      this.AfficherAll();
      

    }

    AfficherAll()
    {
      this.fService.getAllFormation().subscribe(response=>this.formations=response)
    }

}
