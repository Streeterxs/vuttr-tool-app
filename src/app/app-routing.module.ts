import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: "/vuttr", pathMatch:"full" },
  { path: 'vuttr', loadChildren: "./features-modules/vuttr/vuttr.module#VuttrModule" }
];

@NgModule({
  exports:[RouterModule],
  imports:[ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
