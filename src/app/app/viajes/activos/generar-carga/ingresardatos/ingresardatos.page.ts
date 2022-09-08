import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresardatos',
  templateUrl: './ingresardatos.page.html',
  styleUrls: ['./ingresardatos.page.scss'],
})
export class IngresardatosPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  origen(){
    this.router.navigate(['app/viajes/publicar/maquinaria'])
  }
}
