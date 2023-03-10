import { Component, OnInit } from '@angular/core';
import { Commercial } from '../models/commercial';
import { CommercialService } from '../services/commercial.service';

@Component({
  selector: 'app-afficher-commerciaux',
  templateUrl: './afficher-commerciaux.component.html',
  styleUrls: ['./afficher-commerciaux.component.css']
})
export class AfficherCommerciauxComponent implements OnInit {
  ngOnInit(): void {
    this.afficherAllCommerciaux();
  }

  commerciaux!:Commercial[];

  constructor(private commercialService:CommercialService){}


  afficherAllCommerciaux()
  {
    this.commercialService.afficherAllCommercial().subscribe(response=> this.commerciaux=response)
  }

}
