import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {
  
  img:string;

  constructor() { }

  ngOnInit() {
    this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/World_location_map.svg/1280px-World_location_map.svg.png'
  }

}
