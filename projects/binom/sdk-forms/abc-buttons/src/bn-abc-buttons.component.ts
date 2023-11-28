import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'bn-abc-buttons',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './bn-abc-buttons.component.html',
  styleUrl: './bn-abc-buttons.component.css'
})
export class BnAbcButtonsComponent {
  alphabet: string[] = [];
  @Output() clickedOn = new EventEmitter()
  constructor() {
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }

  handleButtclickedOn(letter: string) {
    this.clickedOn.emit(letter)

  }
}
