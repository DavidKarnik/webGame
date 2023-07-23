import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

import { AppComponent } from './app.component';
import {TargetComponent} from "./target.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
