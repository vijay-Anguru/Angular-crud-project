import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendardemoComponent } from './calendardemo/calendardemo.component';
import { EventComponent } from './event/event.component';
import { SessionComponent } from './session/session.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { LoginListComponent } from './login-list/login-list.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PolicyModule } from './policy/policy.module';




@NgModule({
  declarations: [
    AppComponent,
    CalendardemoComponent,
    EventComponent,
    SessionComponent,
    SpeakerComponent,
    LoginListComponent,
    ShowComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    PolicyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
