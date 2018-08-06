import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // definir una propiedad de tipo numero e inicializar
  progreso: number = 50;

  constructor() { }

  ngOnInit() {
  }

  // Definir metodo para cambiar valor
  cambiarValor(valor: number) {
    if (this.progreso + valor <= 100 && this.progreso + valor >= 0) {
      this.progreso += valor;
    }
  }

}
