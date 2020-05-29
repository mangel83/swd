import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';


const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent
  },
  {
    path: 'personaje/:nombre',
    component: PersonajeComponent
  },
  {
    path: '**',
    component: PersonajesComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
