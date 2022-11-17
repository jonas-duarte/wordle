import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtbrOneComponent } from './pages/ptbr-one/ptbr-one.component';
import { PtbrTwoComponent } from './pages/ptbr-two/ptbr-two.component';
import { PtbrFourComponent } from './pages/ptbr-four/ptbr-four.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ptbr', component: PtbrOneComponent },
  { path: 'ptbr2', component: PtbrTwoComponent },
  { path: 'ptbr4', component: PtbrFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
