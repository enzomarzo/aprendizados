import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { OrientacaoObjetoComponent } from './javascript/orientacao-objeto/orientacao-objeto.component';
import { PhpComponent } from './php/php.component';
import { WordpressComponent } from './wordpress/wordpress.component';

const routes: Routes = [

  { path: ' ' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'javascript/oo', component: OrientacaoObjetoComponent },
  { path: 'php', component: PhpComponent},
  { path: 'wordpress', component: WordpressComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
