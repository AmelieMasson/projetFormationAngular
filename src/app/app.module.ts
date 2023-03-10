import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './participant/participant.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ProspectComponent } from './prospect/prospect.component';
import { FormsModule } from '@angular/forms';
import { FormParticipantComponent } from './form-participant/form-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    CommercialComponent,
    ProspectComponent,
    FormParticipantComponent
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
