import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer-component/answer.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route
  { path: 'answer', component: AnswerComponent }, // Route for AnswerComponent
  { path: '**', redirectTo: '' } // Wildcard route to redirect to home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
