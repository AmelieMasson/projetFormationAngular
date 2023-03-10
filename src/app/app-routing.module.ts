import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherCommerciauxComponent } from './afficher-commerciaux/afficher-commerciaux.component';
import { AfficherFormationAccueilComponent } from './afficher-formation-accueil/afficher-formation-accueil.component';
import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';
import { AfficherParticipantComponent } from './afficher-participant/afficher-participant.component';

const routes: Routes = [
  {path:'afficherFormation/:id', component:AfficherFormationComponent},
  {path: 'afficherParticipants/:idFormation', component:AfficherParticipantComponent},
  {path: 'accueil', component:AccueilComponent},
  {path: 'formations', component:AfficherFormationAccueilComponent},
  {path: 'commerciaux', component:AfficherCommerciauxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
