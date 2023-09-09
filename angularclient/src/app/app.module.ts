import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TargetComponent} from "./target.component";
import {TimerComponent} from "./timer.component";

import { TargetService } from './target.service';

import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TargetComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Aby bylo možné vstupní pole vázat na proměnnou v komponentě, musíte importovat FormsModule (textBox)
  ],
  // Služby registrované v sekci providers v modulu jsou v Angularu výchozím způsobem jedinou instancí (singleton)
  // pro celý modul. To znamená, že všechny komponenty a služby v rámci modulu budou sdílet jednu instanci této služby.
  providers: [TargetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
