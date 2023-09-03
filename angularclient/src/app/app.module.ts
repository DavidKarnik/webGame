import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TargetComponent} from "./target.component";
import {UserListComponent} from "./aaaUserList.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TargetComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
