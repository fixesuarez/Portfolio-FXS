import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RealisationComponent }   from './realisations/realisations.component';
import { RealisationOmegaComponent } from './realisations/RealisationOmega/realisation-omega.component';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { CommunicationComponent } from 'src/app/skills/communication/communication.component';
import { AppComponent } from 'src/app/app.component';
 
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'realisations', component: RealisationComponent },
  { path: 'realisations/omega', component: RealisationOmegaComponent },
  
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/communication', component: CommunicationComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}