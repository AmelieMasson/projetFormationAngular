import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Participant } from './models/participant';
import { ParticipantComponent } from './participant/participant.component';

const routes: Routes = [{path:'participant', component:ParticipantComponent}];



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
