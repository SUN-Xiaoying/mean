import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './material/material.module'
//---------CV--------//
import { BlackRComponent } from './simple/br/br.component';
import { YellowGComponent } from './simple/yg/yg.component';

//-----Template------//
import { EducationComponent } from './template/education/education.component';




@NgModule({
  declarations: [
    AppComponent,
    BlackRComponent,
    YellowGComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
