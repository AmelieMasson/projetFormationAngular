import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Historique } from '../models/historique';
import { Rdv } from '../models/rdv';
import { HistoriqueService } from '../services/historique.service';
import { RdvService } from '../services/rdv.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit{

  constructor(private route:ActivatedRoute, private historiqueService:HistoriqueService, private rdvService:RdvService ){}
  
  id!:number;
  historiques!:Historique[];
  rdvs!:Rdv[];
  
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.AfficherAllHistoriques();
    this.AfficherAllRdvs();
    
  }

  
  AfficherAllHistoriques()
  {
    this.historiqueService.getHistoriquesByIdPersonne(this.id).subscribe(response=>this.historiques=response)
  }

  AfficherAllRdvs()
  {
    this.rdvService.getRdvsByIdPersonne(this.id).subscribe(response=>this.rdvs=response)
  }


}
