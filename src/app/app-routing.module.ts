import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendardemoComponent } from './calendardemo/calendardemo.component';
import { EventComponent } from './event/event.component';
import { LoginListComponent } from './login-list/login-list.component';
import { SessionComponent } from './session/session.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { ShowComponent } from './show/show.component';
import { SubmitPolicyComponent } from './policy/submit-policy/submit-policy.component';
import { PolicyListComponent } from './policy/policy-list/policy-list.component';
const routes: Routes = [
  { path: 'calendardemo', component: CalendardemoComponent },
  { path: 'Event', component: EventComponent },
  { path: 'Event/:id', component: EventComponent },
  { path: 'Session/:id', component: SessionComponent },
  { path: 'Speaker/:id', component: SpeakerComponent },
  { path: 'login-list', component: LoginListComponent },
  { path: 'Session', component: SessionComponent },
  { path: 'Speaker', component: SpeakerComponent },
  { path: 'Show', component: ShowComponent },
  { path: '', redirectTo: '/calendardemo', pathMatch: 'full' },
  { path: 'submit-policy', component: SubmitPolicyComponent },
  { path: 'PolicyList', component: PolicyListComponent },
  { path: 'submit-policy/:id', component: SubmitPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
