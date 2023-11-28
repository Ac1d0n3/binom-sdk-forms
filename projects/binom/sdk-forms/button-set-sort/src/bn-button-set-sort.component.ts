import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bn-button-set-sort',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatTooltipModule,TranslateModule],
  templateUrl: './bn-button-set-sort.component.html',
  styleUrl: './bn-button-set-sort.component.css'
})
export class BnButtonSetSortComponent {
  @Output() dataChange = new EventEmitter();
  @Input() color:string = 'accent';
  @Input() enableToolTips: boolean = false;
  @Input() toolTipsTranslationTag: string = '';

  constructor() { }

  
}
