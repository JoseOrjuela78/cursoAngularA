import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

@Input() character!: ICharacter;


}
