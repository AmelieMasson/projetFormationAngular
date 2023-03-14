import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-afficher-formation-accueil',
  templateUrl: './afficher-formation-accueil.component.html',
  styleUrls: ['./afficher-formation-accueil.component.css']
})
export class AfficherFormationAccueilComponent implements OnInit{
 

  formations!:Formation[];

  ngOnInit(): void {
    this.afficherFormationsAccueil();
  }

  constructor(private formationService:FormationService){}


  afficherFormationsAccueil()
  {
    this.formationService.getAllFormation().subscribe(response=> this.formations=response)
  }

}
