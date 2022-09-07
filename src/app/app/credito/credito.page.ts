import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
})
export class CreditoPage implements OnInit {

  movimientos:string[] = []

  constructor() { }

  ngOnInit() {
    this.movimientos = ['14/07 Publicacion carga n° 6123', '14/07 Publicacion carga n° 6123',
    '14/07 Publicacion carga n° 6123' ]
  }

}
