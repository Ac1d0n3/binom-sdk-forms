import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPickListComponent } from '@binom/sdk-forms/picklist';

@Component({
  selector: 'app-demo-picklist',
  standalone: true,
  imports: [CommonModule,BnPickListComponent],
  templateUrl: './demo-picklist.component.html',
  styleUrl: './demo-picklist.component.scss'
})
export class DemoPicklistComponent {

}
