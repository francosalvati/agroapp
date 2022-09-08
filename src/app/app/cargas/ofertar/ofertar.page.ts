import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.page.html',
  styleUrls: ['./ofertar.page.scss'],
})
export class OfertarPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  enviarOferta(){
    this.router.navigate(['/app/pagar'])
  }
}
