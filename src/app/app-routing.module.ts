import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtbrOneComponent } from './games/ptbr-one/ptbr-one.component';
import { PtbrTwoComponent } from './games/ptbr-two/ptbr-two.component';
import { PtbrFourComponent } from './games/ptbr-four/ptbr-four.component';
import { HomeComponent } from './home/home.component';

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
