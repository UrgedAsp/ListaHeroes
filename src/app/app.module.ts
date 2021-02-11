import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    HeroesModule,
    ContadoresModule,
    DbzModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
