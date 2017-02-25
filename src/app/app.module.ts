import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventosComponent } from './eventos/eventos.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { MissoesComponent } from './missoes/missoes.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    EventosComponent,
    DepartamentosComponent,
    MissoesComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
