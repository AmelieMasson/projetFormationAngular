import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/formateur';
import { Formation } from '../models/formation';
import { FormateurService } from '../services/formateur.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private fservice:FormationService,private formateurservice:FormateurService, private router:Router)
  {

  }

formations!:Formation[]
fForm!:Formation
f!:Formation

formateurs!:Formateur[]
idFormateur!:number


AfficherFormation()
{


  this.fservice.getAllFormation().subscribe(
    response=>this.formations=response

  )
}


supprimeFormation(id:number)
{
  this.fservice.deleteFormation(id).subscribe(
response=>this.AfficherFormation()
  )
}


afficherFormateur()
{
  this.formateurservice.getAllFormateur().subscribe(

  response=>this.formateurs=response
  )
}

ajouterFormation()
{
  let form:Formateur=new Formateur();
  this.formateurservice.selectById(this.idFormateur).subscribe(
    response=>
    {
      console.log(response)
      form=response
      this.fForm.formateur=response;
      this.fservice.addFormation(this.fForm).subscribe(
        response=>this.AfficherFormation()
      )
    }
  )
  }

  modifierFormation(id:number)
  {
    this.fservice.getFormationById(id).subscribe(

      response=>this.fForm=response
    )
  }



  ngOnInit(): void {

    
    this.fForm=new Formation();
    this.AfficherFormation()

    this.afficherFormateur()
  }

  deconnect()
{
  sessionStorage.removeItem('token')
  this.router.navigateByUrl('auth')
}


}
