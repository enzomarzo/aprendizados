import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { OrientacaoObjetoComponent } from './javascript/orientacao-objeto/orientacao-objeto.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { PhpComponent } from './php/php.component';
import { DadosComponent } from './dados/dados.component';
import { ReactComponent } from './react/react.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { CrudComponent } from './app/javascript/crud/crud.component';
import { ArraysObjetosComponent } from './javascript/_principios/arrays-objetos/arrays-objetos.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, HomeComponent, JavascriptComponent, OrientacaoObjetoComponent, WordpressComponent, PhpComponent, DadosComponent, ReactComponent, FirebaseComponent, CrudComponent, ArraysObjetosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
