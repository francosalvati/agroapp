import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.page.html',
  styleUrls: ['./maquinaria.page.scss'],
})
export class MaquinariaPage implements OnInit {

  maquinarias = [];

  constructor( private router:Router) {

  }

  ngOnInit() {
    this.maquinarias= [{
      tipo: 'Cosechadora',
      value: 'cosechadora'
    }, {
      tipo: 'Tractores',
      value: 'tractores'
    },
    {
      tipo: 'Cargadores frontales',
      value: 'cargadoresFrontales'
    },
    {
      tipo: 'Equipos de forraje',
      value: 'equiposForraje'
    },
    {
      tipo: 'Semobradores',
      value: 'sembradores'
    },
    {
      tipo: 'Desmalezadoras',
      value: 'desmalezadoras'
    },
    {
      tipo: 'Pulverizantes',
      value: 'pulverizantes'
    },
    {
      tipo: 'Otras maquinarias',
      value: 'otras'
    },
    ]
  }

  mostrar(ejemplo){
    console.log(ejemplo)
  }
  
  enviarformulario(){
    this.router.navigate(['app/credito'])
  }

}
