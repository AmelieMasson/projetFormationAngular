import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Formateur } from '../models/formateur';
import { Formation } from '../models/formation';
import { FormateurService } from '../services/formateur.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation-par-formateur',
  templateUrl: './formation-par-formateur.component.html',
  styleUrls: ['./formation-par-formateur.component.css']
})
export class FormationParFormateurComponent implements OnInit {


  idFormation!:number
formations!:Formation[]

constructor(private route:ActivatedRoute,private fservice:FormationService,private formservice:FormateurService){
  

}




  ngOnInit(): void {
    
    this.idFormation=this.route.snapshot.params['id'];
    console.log(this.idFormation)
       this.formservice.getFormationById(this.idFormation).subscribe(
         response=>this.formations=response
       )
   
     }

  }




