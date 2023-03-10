import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherFormationComponent } from './afficher-formation/afficher-formation.component';
import { AfficherParticipantComponent } from './afficher-participant/afficher-participant.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherFormationAccueilComponent } from './afficher-formation-accueil/afficher-formation-accueil.component';
import { AfficherCommerciauxComponent } from './afficher-commerciaux/afficher-commerciaux.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherFormationComponent,
    AfficherParticipantComponent,
    AccueilComponent,
    AfficherFormationAccueilComponent,
    AfficherCommerciauxComponent
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
