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
import { LinkComponent } from './link/link.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    EventosComponent,
    DepartamentosComponent,
    MissoesComponent,
    LocalComponent,
    LinkComponent,
    FooterComponent,
    TeamComponent
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
