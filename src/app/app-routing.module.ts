import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
 
const routes: Routes = [
  { path: 'portal/greet', component: AppComponent },
  { path: '', redirectTo: 'portal/greet', pathMatch: 'full' }, // Redirect root to /portal/greet
  { path: '**', redirectTo: 'portal/greet' } // Redirect unknown routes
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }