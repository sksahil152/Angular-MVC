import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewModeComponent } from './view-mode/view-mode.component';
import { AnswerComponent } from './answer-component/answer.component';
import { SignaturePadModule } from 'ngx-signaturepad';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@NgModule({
  declarations: [
    AppComponent, ViewModeComponent, AnswerComponent, SignaturePadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SignaturePadModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent, AnswerComponent, ViewModeComponent, SignaturePadComponent]
})
export class AppModule { }
