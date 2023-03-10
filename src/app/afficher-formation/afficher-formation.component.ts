import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-afficher-formation',
  templateUrl: './afficher-formation.component.html',
  styleUrls: ['./afficher-formation.component.css']
})
export class AfficherFormationComponent implements OnInit {
  
  formations!:Formation[];
  formations2:Formation[]=[];
  formations3:Formation[]=[];
  id!:number;
  formation!:Formation;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    if(this.id)
    {
      this.afficherFormationDesFormateur(this.id);
    }
    
    


    


    
  }

  constructor(private formationService:FormationService, private route:ActivatedRoute, private router:Router){

  }

  afficherHistoriqueFormation()
  {
    let date=new Date();
   // let date_fin=this.formation.date_fin;
    for(let f of this.formations)
    {
     // console.log(f.date_fin);
      let dateF:Date;
      dateF=new Date(f.date_fin.toString());
     
    if(date.getTime() > dateF.getTime())
    {
      console.log("test");
      this.formations2.push(f);
    }
  }
  }


  afficherFormationDesFormateur(id:number)
  {
    this.formationService.getFormationByFormateur(this.id).subscribe(
      response=>
      {
        this.formations=response;
        this.afficherHistoriqueFormation();
      })
  }


  afficherParticipant(idFormation:number)
  {
    this.router.navigateByUrl(`afficherParticipants/${idFormation}`)
  }

}
