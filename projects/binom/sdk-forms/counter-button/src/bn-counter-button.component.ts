import { Component, Input,Output,EventEmitter} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'bn-counter-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatTooltipModule,TranslateModule,MatBadgeModule],
  templateUrl: './bn-counter-button.component.html',
  styleUrl: './bn-counter-button.component.css'
})
export class BnCounterButtonComponent  {

  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  @Input() type:any = 'default';
  @Input() color:any = '';
  @Input() badgecolor:any = 'accent';

  @Input() count:number = 0;
  @Input() countOnClick: boolean = true;
  @Input() mode:string = 'increase';
  @Input() buttonlabel:string = 'click me';
  @Input() showCount:string = 'badge';
  @Input() icon:string = '';

  constructor() {}

  /**
   * Increments the count when the button is clicked and emits an event
   * to notify parent component of new count value
   */
  handleButtonClick() {
    if(this.countOnClick === true){
      if(this.mode === 'increase') this.count++;
      if(this.mode === 'decrease') this.count--;
    }

    this.countChanged.emit(this.count);
  }

}