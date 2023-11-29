import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnCounterButtonComponent } from '@binom/sdk-forms/counter-button';

@Component({
  selector: 'app-demo-counter-but',
  standalone: true,
  imports: [CommonModule, BnCounterButtonComponent],
  templateUrl: './demo-counter-but.component.html',
  styleUrl: './demo-counter-but.component.scss'
})
export class DemoCounterButComponent {

}
