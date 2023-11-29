import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnFormErrorComponent } from '@binom/sdk-forms/form-error';

@Component({
  selector: 'app-demo-form-er',
  standalone: true,
  imports: [CommonModule,BnFormErrorComponent],
  templateUrl: './demo-form-er.component.html',
  styleUrl: './demo-form-er.component.scss'
})
export class DemoFormErComponent {

}
