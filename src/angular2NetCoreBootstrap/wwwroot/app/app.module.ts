import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {WelcomeComp  }   from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, WelcomeComp],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }