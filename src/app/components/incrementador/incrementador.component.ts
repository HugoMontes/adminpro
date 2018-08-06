import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Hace referencia a un elemento html
  @ViewChild('txtProgress') txtProgress: ElementRef;

  // Recibir los valores con el decorador  @Input
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  // Emite un numero como un evento
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Capturar evento el cambio de valor en input text
  onChanges(newValue: number) {
    // const elemHTML: any = document.getElementsByName('progreso')[0];
    // Validar el nuevo valor ingresado
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // Asignar un valor al campo de texto
    this.txtProgress.nativeElement.value = this.progreso;
    // Emite el cambio de valor
    this.cambioValor.emit(this.progreso);
    // Poner el foco en un campo de texto
    this.txtProgress.nativeElement.focus();
  }

  // Definir metodo para cambiar valor
  cambiarValor(valor: number) {
    if (this.progreso + valor <= 100 && this.progreso + valor >= 0) {
      this.progreso += valor;
      // Emite el cambio de valor
      this.cambioValor.emit(this.progreso);
    }
  }
}

