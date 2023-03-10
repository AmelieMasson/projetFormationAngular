import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  ngOnInit(): void {
    
  }

  constructor(private router:Router){}

  formations()
  {
    this.router.navigateByUrl('formations')
  }


  commerciaux()
  {
    this.router.navigateByUrl('commerciaux')
  }

}
