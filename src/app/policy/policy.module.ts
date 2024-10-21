import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitPolicyComponent } from './submit-policy/submit-policy.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyListComponent } from './policy-list/policy-list.component';
const routes: Routes = [
  { path: 'submit-policy', component: SubmitPolicyComponent },
  { path: 'PolicyList', component: PolicyListComponent }

];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  declarations: [SubmitPolicyComponent, PolicyListComponent]
})
export class PolicyModule { }
