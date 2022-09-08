import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {

  viaje: any;
  dadores: any[] = [];
  constructor( private alertController:AlertController) { }

  ngOnInit() {
    this.viaje = {
      numero: 'viaje N°: 1231',
      fecha: '31 de Mayo al 4 de Junio 2022',
      camion: 'chasis',
      remolque: 'semicarreton',
      tipo: 'cargas especiales'
    }
    this.dadores = [{
      nombre: 'dador1',
      operaciones: 6,
      verificacion: 'no verificado',
      detalle: 'tractor fiat 500 articulado motor xxxxxxxxxxxxxxxx xx metros'
    },
    {
      nombre: 'dador2',
      operaciones: 11,
      verificacion: 'pendiente',
      detalle: 'fumigador algo matriculado motor xxxxxxxxxxxxxxxx xx metros'
    },
    {
      nombre: 'dador3',
      operaciones: 27,
      verificacion: 'verificado',
      detalle: 'camion mercedez aguant articulado motor xxxxxxxxxxxxxxxx xx metros'
    },
    ]
  }
  async asignar() {
    const alert = await this.alertController.create({
      header: 'estas por asignar el viaje',
      buttons: ['Confirmar'],
    });

    await alert.present();
  }
}
  


