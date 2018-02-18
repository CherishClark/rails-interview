import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatSortModule } from '@angular/material'

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { ShortenPipe } from './shorten.pipe'
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ StudentsService ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
