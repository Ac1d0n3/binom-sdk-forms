import { Component, OnInit, EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'bn-sort-menu',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatButtonModule,TranslateModule,MatTooltipModule],
  templateUrl: './bn-sort-menu.component.html',
  styleUrl: './bn-sort-menu.component.css'
})
export class BnSortMenuComponent implements OnInit {
  @HostBinding('class.button-component-fix') addClass: boolean = true;
  @Input() fontSet:string = 'fas';
  @Input() color:string = '';
  @Input() iconSize:string = '';
  @Input() orderData:any = [];
  @Input() active:string = '';



  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  private  _showClear:boolean = false;
  get showClear(): boolean{ return this._showClear; }
  @Input() set showClear(val: BooleanInput) { this._showClear = coerceBooleanProperty(val); }

  private  _disabled:boolean = false;
  get disabled(): boolean{ return this._disabled; }
  @Input() set disabled(val: BooleanInput) { this._disabled = coerceBooleanProperty(val); }

  private  _reverse:boolean = false;
  get reverse(): boolean{ return this._reverse; }
  @Input() set reverse(val: BooleanInput) { this._reverse = coerceBooleanProperty(val); }

  @Input() translateTag: string = '';

  @Output() activeOrder = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  sortBy(name:string, reverse:boolean){
    this.active = name==='doClearValues' ?'':name;

    this.reverse = reverse;
    this.activeOrder.emit({name: name , reverse: reverse})
  }
}

