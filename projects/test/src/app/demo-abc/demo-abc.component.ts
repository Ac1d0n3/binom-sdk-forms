import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnAbcButtonsComponent } from '@binom/sdk-forms/abc-buttons';

@Component({
  selector: 'app-demo-abc',
  standalone: true,
  imports: [CommonModule, BnAbcButtonsComponent],
  templateUrl: './demo-abc.component.html',
  styleUrl: './demo-abc.component.scss'
})
export class DemoAbcComponent {
  cur:string = '';
  clicked(val:string){
    this.cur = val
  }
}
