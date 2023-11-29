import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPhoneInputComponent } from '@binom/sdk-forms/phone-inputs';

@Component({
  selector: 'app-demo-phone-inputs',
  standalone: true,
  imports: [CommonModule,BnPhoneInputComponent],
  templateUrl: './demo-phone-inputs.component.html',
  styleUrl: './demo-phone-inputs.component.scss'
})
export class DemoPhoneInputsComponent {

}
