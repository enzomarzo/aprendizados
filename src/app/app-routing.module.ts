import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './dados/dados.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { OrientacaoObjetoComponent } from './javascript/orientacao-objeto/orientacao-objeto.component';
import { ArraysObjetosComponent } from './javascript/_principios/arrays-objetos/arrays-objetos.component';
import { PhpComponent } from './php/php.component';
import { ReactComponent } from './react/react.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [

  { path: ' ' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'javascript/oo', component: OrientacaoObjetoComponent },
  { path: 'javascript/array-objeto', component: ArraysObjetosComponent },
  { path: 'php', component: PhpComponent},
  { path: 'wordpress', component: WordpressComponent},
  { path: 'ciencia-de-dados', component: DadosComponent},
  { path: 'react', component: ReactComponent},
  { path: 'firebase', component: FirebaseComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
