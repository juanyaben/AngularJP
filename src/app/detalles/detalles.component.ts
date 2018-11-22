import { Component, OnInit } from '@angular/core';
import { NameServicieService } from '../Servicios/name-servicie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
 id :object;
 user : object;
  constructor(private servicio:NameServicieService,private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(params => this.id = params.id)
   }

  ngOnInit() {
    this.servicio.buscarPersona(this.id).subscribe(
      usuario => this.user = usuario
    )

    
  }

}
