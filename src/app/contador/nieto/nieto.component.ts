import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

  @Input() contador: number = 0;
  @Output() cambioContador = new EventEmitter<number>();

  reset() {
    this.contador = 0;
    this.cambioContador.emit(0);
  }

}
