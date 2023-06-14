import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  //props entrada
@Input() name = '';
  //props salida
@Output() onClick = new EventEmitter();

click(){
  this.onClick.emit(this.name);
}


}
