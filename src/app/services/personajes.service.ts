import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  RespuestaInterface,
  PersonajeInterface,
} from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private URL_API_SW_PERSONAJES: string = 'https://swapi.py4e.com/api/people/';

  private pesonajes: PersonajeInterface[] = [];

  constructor(private http: HttpClient) {}

  //retorna la lista de los personajes de la api de start wars
  getPersonajes(): Promise<PersonajeInterface[]> {
    if (this.pesonajes.length > 0) {
      return Promise.resolve(this.pesonajes);
    } else {
      return new Promise((resolve) => {
        this.http
          .get(this.URL_API_SW_PERSONAJES)
          .subscribe((respuesta: RespuestaInterface) => {
            if (respuesta) {
              this.pesonajes = respuesta.results;
            }
            resolve(this.pesonajes);
          });
      });
    }
  }

  //retorna el detalle de un personaje por su nombre
  getPersonajePorNombre(nombre: string) {
    if (this.getPersonajes.length > 0) {
      const personajeSW = this.pesonajes.find((p) => p.name === nombre);
      return Promise.resolve(personajeSW);
    } else {
      return this.getPersonajes().then((personajes) => {
        const personajeSW = this.pesonajes.find((p) => p.name === nombre);
        return Promise.resolve(personajeSW);
      });
    }
  }
}
