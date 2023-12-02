import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { BnSortMenuComponent } from '@binom/sdk-forms/sort-menu';
import { BnMiniSearchComponent } from '@binom/sdk-core/mini-search';
import { BooleanInput, NumberInput, coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'bn-mini-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatTooltipModule,MatButtonModule,TranslateModule,BnSortMenuComponent,BnMiniSearchComponent],
  templateUrl: './bn-mini-header.component.html',
  styleUrl: './bn-mini-header.component.css'
})
export class BnMiniHeaderComponent {
  
  @Input() color: string = '';
  @Input() searchLabel: string = 'search';

  @Input() label:string = '';
  @Input() withSearch: boolean = true;
  @Input() orderData:any = []

  @Input() searchFields: any =[];
  @Input() currentSelected: any = [];
  @Input() translateTag: string = '';

  private  _debounceTime:number = 500;
  get debounceTime(): number{ return this._debounceTime; }
  @Input() set debounceTime(val: NumberInput) { this._debounceTime = coerceNumberProperty(val); }

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  private  _disabled:boolean = false;
  get disabled(): boolean{ return this._disabled; }
  @Input() set disabled(val: BooleanInput) { this._disabled = coerceBooleanProperty(val); }

  @Output() searchTextChange = new EventEmitter();
  @Output() activeSearchFields = new EventEmitter();
  @Output() activeOrder = new EventEmitter();

  searchText:string = '';
  showLabel:boolean = true;
  show :boolean = false;
  constructor() { }

  ngOnInit(): void { }

  clickAction(){
    if(this.searchText === ''){
      this.show = !this.show;

    } else {
      this.searchText = ''
      this.searchTextChange.emit(this.searchText)
    }
  }

  orderChange(data:any){
    this.activeOrder.emit(data)
  }

  onActivSearchFields(data:any){
    this.activeSearchFields.emit(data)
  }

  searchChange(data:string){
    this.searchText = data;
    this.searchTextChange.emit(data)
  }

  onSearchShow(data:boolean){
    this.showLabel = !data
  }

}
