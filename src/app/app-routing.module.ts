import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
