import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/formateur';
import { FormateurService } from '../services/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  formateurs!:Formateur[]

constructor(private formservice:FormateurService,private router:Router){

}



AfficherFormateur()
{
  this.formservice.getAllFormateur().subscribe(

    response=>this.formateurs=response
  )

 

}

afficherFormationFormateur(id:number)
{
  this.router.navigateByUrl(`afficherFormationParFormateur/${id}`);
}

  ngOnInit(): void {
  
    this.AfficherFormateur()
    
  }


}
