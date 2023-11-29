import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSortMenuComponent } from '@binom/sdk-forms/sort-menu';

@Component({
  selector: 'app-demo-sort-menu',
  standalone: true,
  imports: [CommonModule,BnSortMenuComponent],
  templateUrl: './demo-sort-menu.component.html',
  styleUrl: './demo-sort-menu.component.scss'
})
export class DemoSortMenuComponent {
  orderData=[ {
    name:'Feld A', reverse:false
  },
  {
    name:'langer Feldname mit Tabelle', reverse:false
  }]
}
