import { Component, OnInit } from '@angular/core';
import {
  PersonajeInterface,
} from '../../interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes: PersonajeInterface[] = [];

  constructor(public personajesService: PersonajesService) { }

  ngOnInit(): void {
    console.log('llmando al init')
    this.personajesService.getPersonajes()
    .then(personajes => {
      console.log('Perosnajes obtenidos: ' + personajes);
      this.personajes = personajes;
    });
  }

}
