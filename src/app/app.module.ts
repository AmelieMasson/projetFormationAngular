import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';
import { AfficherParticipantComponent } from './afficher-participant/afficher-participant.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherFormationAccueilComponent } from './afficher-formation-accueil/afficher-formation-accueil.component';
import { AfficherCommerciauxComponent } from './afficher-commerciaux/afficher-commerciaux.component';
import { ParticipantComponent } from './participantAdmin/participant.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ProspectComponent } from './prospect/prospect.component';

import { FormParticipantComponent } from './form-participant/form-participant.component';
import { FormationComponent } from './formationAdmin/formation.component';
import { FormationParParticipantsComponent } from './formation-par-participants/formation-par-participants.component';
import { FormateurComponent } from './formateurAdmin/formateur.component';
import { FormationParFormateurComponent } from './formation-par-formateur/formation-par-formateur.component';

import { AuthentificationInterceptor} from './authentification-interceptor.interceptor';
import { AuthComponent } from './auth/auth.component';
import { CommercialAdminComponent } from './commercial-admin/commercial-admin.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AfficherFormationComponent,
    AfficherParticipantComponent,
    AccueilComponent,
    AfficherFormationAccueilComponent,
    AfficherCommerciauxComponent,
    FormationComponent,
    ParticipantComponent,
    FormationParParticipantsComponent,
    FormateurComponent,
    FormationParFormateurComponent,
    CommercialComponent,
    ProspectComponent,
    FormParticipantComponent,

    AuthComponent,

    CommercialAdminComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthentificationInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
