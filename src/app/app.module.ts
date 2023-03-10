import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormationComponent } from './formation/formation.component';
import ParticipantComponent from './participant/participant.component';
import { FormationParParticipantsComponent } from './formation-par-participants/formation-par-participants.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FormationParFormateurComponent } from './formation-par-formateur/formation-par-formateur.component';
=======
import { ParticipantComponent } from './participant/participant.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ProspectComponent } from './prospect/prospect.component';
import { FormsModule } from '@angular/forms';
import { FormParticipantComponent } from './form-participant/form-participant.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormationComponent,
    ParticipantComponent,
    FormationParParticipantsComponent,
    FormateurComponent,
    FormationParFormateurComponent
=======
    ParticipantComponent,
    CommercialComponent,
    ProspectComponent,
    FormParticipantComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
