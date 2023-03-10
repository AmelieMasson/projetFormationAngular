import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FormateurComponent } from './formateur/formateur.component';
import { FormationParFormateurComponent } from './formation-par-formateur/formation-par-formateur.component';
import { FormationParParticipantsComponent } from './formation-par-participants/formation-par-participants.component';
import { FormationComponent } from './formation/formation.component';
import ParticipantComponent from './participant/participant.component';

const routes: Routes = [
  {path:"afficherFormationParFormateur/:id",component:FormationParFormateurComponent},
  {path:"afficherFormationParParticipant/:id",component:FormationParParticipantsComponent},
  {path:"afficherFormateur",component:FormateurComponent},
  {path:"afficherFormation",component:FormationComponent},
  {path:"afficherParticipants",component:ParticipantComponent},

  



];
=======
import { CommercialComponent } from './commercial/commercial.component';
import { FormParticipantComponent } from './form-participant/form-participant.component';
import { Participant } from './models/participant';
import { ParticipantComponent } from './participant/participant.component';
import { ProspectComponent } from './prospect/prospect.component';

const routes: Routes = [
  {path:'participant', component:ParticipantComponent},
  {path:'commercial', component:CommercialComponent},
  {path:'prospect/:id', component:ProspectComponent},
  {path:'form/:id', component:FormParticipantComponent}
];


>>>>>>> main

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
