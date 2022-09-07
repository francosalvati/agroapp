import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.page.html',
  styleUrls: ['./cargas.page.scss'],
})
export class CargasPage implements OnInit {

  list:any[] = []
  constructor() { }

  ngOnInit() {
    this.list = ['carga 1','carga 2', 'carga 3']
  }

}
