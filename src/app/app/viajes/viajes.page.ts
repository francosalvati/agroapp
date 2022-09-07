import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {
  list:any[] = []
  constructor() { }

  ngOnInit() {
    this.list = ['viaje 1','viaje 2', 'viaje 3']
  }

}
