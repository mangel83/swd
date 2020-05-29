import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeInterface } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public personaje: PersonajeInterface;

  constructor(
    public personajesService: PersonajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    console.log('nombre: ' + nombre)
    this.personajesService.getPersonajePorNombre(nombre).then(personaje => {
      if(!personaje) {
        return this.router.navigateByUrl('/');
      } 
      personaje.name = this.getNombreImgFormateado(personaje.name);
      this.personaje = personaje;
    });
  }

  getNombreImgFormateado(nombre:string) {
    return nombre.replace(/ /g, '-');
  }
}
