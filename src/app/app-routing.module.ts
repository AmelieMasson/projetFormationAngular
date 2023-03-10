import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
