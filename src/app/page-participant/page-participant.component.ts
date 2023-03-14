import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Route, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { FormationService } from '../services/formation.service';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-page-participant',
  templateUrl: './page-participant.component.html',
  styleUrls: ['./page-participant.component.css']
})
export class PageParticipantComponent implements OnInit {


  id!:number;
  formations!:Formation[];


constructor(private router:Router, private formationService:FormationService, private route:ActivatedRoute)
{}






  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.formationParParticipant(this.id);
  }




  formationParParticipant(id:number)
  {
    this.formationService.getFormationById2(id).subscribe(response=>this.formations=response)
  }


  deconnect()
  {
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('accueil')
  }

}
