import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students.service';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ StudentsService ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
