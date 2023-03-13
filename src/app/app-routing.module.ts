import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { AfficherCommerciauxComponent } from './afficher-commerciaux/afficher-commerciaux.component';
import { AfficherFormationAccueilComponent } from './afficher-formation-accueil/afficher-formation-accueil.component';
import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';
import { AfficherParticipantComponent } from './afficher-participant/afficher-participant.component';
import { FormateurComponent } from './formateurAdmin/formateur.component';
import { FormationParFormateurComponent } from './formation-par-formateur/formation-par-formateur.component';
import { FormationParParticipantsComponent } from './formation-par-participants/formation-par-participants.component';
import { FormationComponent } from './formationAdmin/formation.component';
import { CommercialComponent } from './commercial/commercial.component';
import { FormParticipantComponent } from './form-participant/form-participant.component';
import { Participant } from './models/participant';

import {ParticipantComponent}  from './participantAdmin/participant.component';
import { ProspectComponent } from './prospect/prospect.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { FormateurGuard } from './formateur.guard';
import { CommercialGuardGuard } from './commercial-guard.guard';
import { ParticipantGuard } from './participant.guard';
import { CommercialAdminComponent } from './commercial-admin/commercial-admin.component';


const routes: Routes = [
  {path:'afficherFormation/:id', component:AfficherFormationComponent,canActivate:[FormateurGuard]},
  {path: 'afficherParticipants/:idFormation', component:AfficherParticipantComponent,canActivate:[FormateurGuard]},
  {path: 'accueil', component:AccueilComponent},
  {path: 'formations', component:AfficherFormationAccueilComponent},
  {path: 'commerciaux', component:AfficherCommerciauxComponent},

  {path:"afficherFormationParFormateur/:id",component:FormationParFormateurComponent,canActivate:[AuthGuardGuard]},
  {path:"afficherFormationParParticipant/:id",component:FormationParParticipantsComponent,canActivate:[AuthGuardGuard]},
  {path:"afficherFormateur",component:FormateurComponent,canActivate:[AuthGuardGuard]},
  {path:"afficherFormation",component:FormationComponent,canActivate:[AuthGuardGuard]},
  {path:"afficherParticipants",component:ParticipantComponent,canActivate:[ParticipantGuard]},
  {path:'participant', component:ParticipantComponent,canActivate:[ParticipantGuard]},
  {path:'commercial', component:CommercialComponent,canActivate:[CommercialGuardGuard]},
  {path:'prospect/:id', component:ProspectComponent,canActivate:[CommercialGuardGuard]},
  {path:'form/:id', component:FormParticipantComponent,canActivate:[CommercialGuardGuard]},
  {path:'auth', component:AuthComponent},
  {path:"afficherCommercialAdmin",component:CommercialAdminComponent},
 

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
