import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CorreuComponent } from './correu/correu.component';
import { LlistaCorreusComponent } from './llista-correus/llista-correus.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreuComponent,
    LlistaCorreusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
