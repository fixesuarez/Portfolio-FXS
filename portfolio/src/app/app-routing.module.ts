import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RealisationComponent }   from './realisations/realisations.component';
import { RealisationOmegaComponent } from './realisations/RealisationOmega/realisation-omega.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/realisations', pathMatch: 'full' },
  { path: 'realisations', component: RealisationComponent },
  { path: 'realisations/omega', component: RealisationOmegaComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}