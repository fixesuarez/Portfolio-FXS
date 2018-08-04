import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RealisationComponent } from './realisations/realisations.component';
import { RealisationOmegaComponent } from './realisations/RealisationOmega/realisation-omega.component';
import { SkillsComponent } from './skills/skills.component';
import { CommunicationComponent } from './skills/communication/communication.component';
import { HomeComponent } from 'src/app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RealisationComponent,
    RealisationOmegaComponent,
    SkillsComponent,
    CommunicationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
