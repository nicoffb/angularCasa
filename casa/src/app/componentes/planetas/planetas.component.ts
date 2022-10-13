import { Component, OnInit } from '@angular/core';
import { Planeta } from '../../interfaces/interfaz.Planetas';
import { PlanetasService } from '../../servicios/planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  listaPlanetas: Planeta[] = [];


  constructor(private planetasService: PlanetasService) { }

  ngOnInit(): void {
    this.planetasService.getPlanetas().subscribe(respuesta => {
      this.listaPlanetas= respuesta.results;
    })
  }
}
