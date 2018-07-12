import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { RealisationComponent } from './realisations/realisations.component';
import { RealisationOmegaComponent } from './realisations/RealisationOmega/realisation-omega.component';

@NgModule({
  declarations: [
    AppComponent,
    RealisationComponent,
    RealisationOmegaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
