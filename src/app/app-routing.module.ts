import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtbrOneComponent } from './pages/ptbr-one/ptbr-one.component';
import { PtbrTwoComponent } from './pages/ptbr-two/ptbr-two.component';
import { PtbrFourComponent } from './pages/ptbr-four/ptbr-four.component';
import { HomeComponent } from './pages/home/home.component';
import { EnOneComponent } from './pages/en-one/en-one.component';
import { EnTwoComponent } from './pages/en-two/en-two.component';
import { EnFourComponent } from './pages/en-four/en-four.component';
import { PtbrEightComponent } from './pages/ptbr-eight/ptbr-eight.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ptbr', component: PtbrOneComponent },
  { path: 'ptbr2', component: PtbrTwoComponent },
  { path: 'ptbr4', component: PtbrFourComponent },
  { path: 'ptbr8', component: PtbrEightComponent },
  { path: 'en', component: EnOneComponent },
  { path: 'en2', component: EnTwoComponent },
  { path: 'en4', component: EnFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
