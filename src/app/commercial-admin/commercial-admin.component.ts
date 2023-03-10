import { Component, OnInit } from '@angular/core';
import { Commercial } from '../models/commercial';
import { CommercialService } from '../services/commercial.service';

@Component({
  selector: 'app-commercial-admin',
  templateUrl: './commercial-admin.component.html',
  styleUrls: ['./commercial-admin.component.css']
})
export class CommercialAdminComponent implements OnInit {

constructor(private cservice:CommercialService)
{

}

commercials!:Commercial[]


  ngOnInit(): void {
    

    this.AfficherAll()
  }


  AfficherAll()
  {
    this.cservice.afficherAllCommercial().subscribe(

      response=>this.commercials=response
    )
  }

}
