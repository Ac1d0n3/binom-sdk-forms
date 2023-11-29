import { Component, OnInit, Input,Output,EventEmitter, ViewChildren, ContentChild,ElementRef,TemplateRef,QueryList, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray,transferArrayItem,copyArrayItem,} from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { BnMiniHeaderComponent } from '@binom/sdk-forms/mini-header';
import { BnButtonSetSortComponent } from '@binom/sdk-forms/button-set-sort';
import { BnButtonSetMoveComponent } from '@binom/sdk-forms/button-set-move';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BnProgressContentComponent } from '@binom/sdk-core/progress-content';
@Component({
  selector: 'bn-picklist',
  standalone: true,
  imports: [CommonModule,BnMiniHeaderComponent,DragDropModule,BnButtonSetSortComponent,BnButtonSetMoveComponent,MatCheckboxModule,ScrollingModule,MatRippleModule,FormsModule,TranslateModule, BnProgressContentComponent],
  templateUrl: './bn-pick-list.component.html',
  styleUrl: './bn-pick-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BnPickListComponent implements OnInit {

  _possibleData:any[] = [];
  get possibleData():any{
    return this._possibleData
  }
  @Input() set possibleData(data:any){
    this._possibleData = [...data]
  }
  //@Input() possibleData:any[] = [];

  @Input() label:string = 'name';
  @Input() selectedData:any[] = [];
  @Input() possibleHeader:string = 'Possible';
  @Input() selectedHeader:string = 'Selected';
  @Input() iconSpacer:boolean = false;
  @Input() sortable:boolean = false;
  @Input() dragable:boolean = true;
  @Input() searchFields: any =[];
  @Input() currentSelected: any = [];
  @Input() orderData:any = [];
  @Input() activeOrderName:string = 'name';
  @Input() activeOrderReverse:boolean = false;
  @Input() withHeader:boolean = true;
  @Input() withSearch:boolean = true;
  @Input() multiple:boolean = false;
  @Input() vItemSize:number = 50;
  @Input() copyOver:boolean = false;
  @Input() showCount:boolean = true;

  possibleDataAll:any[] = [];
  _dataLoaded:boolean =true;
  get dataLoaded():boolean{
    return this._dataLoaded;
  }
  @Input() set dataLoaded(value:boolean){
    this._dataLoaded = value;
    this.possibleDataAll = [...this.possibleData];
  }

  selectedDataAll:any[] = [];
  _dataLoadedSelected:boolean =true;
  get dataLoadedSelected():boolean{
    return this._dataLoadedSelected;
  }
  @Input() set dataLoadedSelected(value:boolean){
    this._dataLoadedSelected = value;
    this.selectedDataAll = [...this.selectedData];
  }


  vBuffer: number = 400;
  @Input('height') set setHeight(value:number){
    this.vBuffer = value
  }

  @Input() enableToolTips: boolean = false;
  @Input() translateTag: string = '';
  @Input() idStr: string = 'pl';

  @ContentChild('picklistContent') picklistContent!: any;
  @ViewChildren(CdkVirtualScrollViewport) viewPorts!: QueryList<CdkVirtualScrollViewport>;

  @Output() pickListDataChange = new EventEmitter();

  moveLeft:boolean = false;
  moveRight:boolean = false;
  leftSearch:string = '';
  rightSearch:string = '';
  leftField:string = '';
  rightField:string = '';
  rightSelected:any = [];
  leftSelected:any = [];

  constructor() { }

  ngOnInit(): void {
    this.leftField = this.currentSelected[0]
    this.rightField = this.currentSelected[0]
    for (let i=0; i < this.possibleData.length; i++){
      this.possibleData[i].selected = false;
    }
    for (let i=0; i < this.selectedData.length; i++){
      this.selectedData[i].selected = false;
    }
  }

  drop(event: CdkDragDrop<string[]>) {

    if(event.container.id === this.idStr+'_selected') {
      this.possibleDataAll = this.possibleDataAll.filter((obj:any)=> obj.id !== event.item.data.id)
    }
    else {
      this.selectedDataAll = this.selectedDataAll.filter((obj:any)=> obj.id !== event.item.data.id)
    }

   let useIndex = event.previousContainer.data.findIndex((obj:any)=> obj.id === event.item.data.id)

    if (event.previousContainer === event.container) {

      if(this.sortable)
        moveItemInArray(event.container.data,
          useIndex,
          event.currentIndex);

    } else {

        if(this.copyOver ){
          copyArrayItem(event.previousContainer.data,
            event.container.data,
            useIndex,
            event.currentIndex);
        } else {

          transferArrayItem(event.previousContainer.data,
            event.container.data,
            useIndex, event.currentIndex);
        }
    }
    this.emitChange();

  }


  private addRemoveSelectedLeft(item:any,remove:boolean = false){
    let index = this.leftSelected.findIndex((obj:any) => obj === item)
    if(!remove && index === -1){
      this.leftSelected.push(item)
    }
    if(remove && index != -1){
      this.leftSelected.splice(index,1)
    }
  }

  private addRemoveSelectedRight(item:any,remove:boolean = false){
    let index = this.rightSelected.findIndex((obj:any) => obj === item)
    if(!remove && index === -1){
      this.rightSelected.push(item)
    }
    if(remove && index != -1){
      this.rightSelected.splice(index,1)
    }
  }

  addRemoveSelection(item:any, source:string = 'possible'){
    if(item.selected) {
      if(source === 'possible') this.addRemoveSelectedLeft(item)
      if(source === 'selected') this.addRemoveSelectedRight(item)
    } else {
      if(source === 'possible') this.addRemoveSelectedLeft(item, true)
      if(source === 'selected') this.addRemoveSelectedRight(item,true)
    }
  }

  dragStarted(){}

  dragEnded(){}

  dataChange(data:any){
    this.possibleData = data.leftData;
    this.selectedData = data.rightData;
    this.possibleDataAll = data.leftDataAll;
    this.selectedDataAll = data.rightDataAll;
    this.leftSelected = data.leftSelected;
    this.rightSelected = data.rightSelected;
    this.emitChange()
  }

  emitChange(){
    //console.log()
    this.possibleData = [...this.possibleData];
    this.selectedData = [...this.selectedData];

    this.pickListDataChange.emit({
      possibleData: this.possibleData,
      selectedData: this.selectedData,
      leftSelected: this.leftSelected,
      rightSelected: this.rightSelected
    })
  }

  orderChangeSelected(data:any){
    if (data.name)
      this.selectedData.sort((a:any, b:any) => a[data.name] > b[data.name] ? 1 : -1);
    else
      this.selectedData.sort((a:any, b:any) => a > b ? 1 : -1);
    if (data.reverse) this.selectedData.reverse();

    this.emitChange()
  }

  orderChangePossible(data:any){
    if (data.name)
      this.possibleData.sort((a:any, b:any) => a[data.name] > b[data.name] ? 1 : -1);
    else
      this.possibleData.sort((a:any, b:any) => a > b ? 1 : -1);

    if (data.reverse) this.possibleData.reverse();

    this.emitChange();
  }

  changePossibleField(data:any){ this.leftField = data; }

  changeSelectedField(data:any){ this.rightField = data; }

  filterSelected(data:any){

    this.rightSearch = data;
    if(this.rightSearch !== '') {
      this.doFilterSelected()
    } else {
      this.selectedData = [...this.selectedDataAll]
    }
  }

  doFilterPossible(){
 
    this.possibleData = [];
    this.possibleData = this.possibleDataAll.filter( str => {
      if(!str[this.leftField]) return false;
      return str[this.leftField].toLowerCase().includes(this.leftSearch.toLowerCase());
    });

    //this.possibleData = [...this.possibleData]
  
  }

  doFilterSelected(){
    this.selectedData = [];
    this.selectedData = this.selectedDataAll.filter( str => {
      if(!str[this.rightField]) return false;
      return str[this.rightField].toLowerCase().includes(this.rightSearch.toLowerCase());
    });

   // this.possibleData = [...this.possibleData]

 
  }

  filterPossible(data:any){
    this.leftSearch = data;
    if(this.leftSearch !== ''){

      this.doFilterPossible()
    } else {
      this.possibleData = [...this.possibleDataAll]
    }

  }



  trackByFn(index:number, item:any) {
    return index; // or item.id
  }

  getNextBatch(event:any) {

    // const end = this.viewport.getRenderedRange().end;
    // const total = this.viewport.getDataLength();
    // if (end === total) {
    //   console.log('request next batch');
    // }
  }


}
