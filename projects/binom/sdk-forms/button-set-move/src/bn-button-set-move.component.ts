import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bn-button-set-move',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatTooltipModule,TranslateModule],
  templateUrl: './bn-button-set-move.component.html',
  styleUrl: './bn-button-set-move.component.css',
  //encapsulation:ViewEncapsulation.None
})
export class BnButtonSetMoveComponent implements OnInit {

  @Input() leftData:any[] = [];
  @Input() rightData:any[] = [];
  @Input() leftDataAll:any = [];
  @Input() rightDataAll:any = [];
  @Input() color:string = 'accent';

  @Input() leftSelected:any = [];
  @Input() rightSelected:any = [];

  @Input() keepSelection:boolean = false;

  @Output() dataChange = new EventEmitter();

  @Input() enableToolTips: boolean = false;
  @Input() translateTag: string = '';

  constructor() { }

  ngOnInit(): void { }

  emitData(){
    this.dataChange.emit({
      leftData: this.leftData,
      rightData: this.rightData,
      leftDataAll: this.leftDataAll,
      rightDataAll: this.rightDataAll,
      leftSelected: this.leftSelected,
      rightSelected: this.rightSelected
    })
  }

  moveAllRight(){
    this.rightData = this.rightData.concat(this.leftData)
    this.rightDataAll = this.rightData.concat(this.leftData)
    this.leftData = []
    for (let i = 0; i < this.rightData.length; i++){
      let index = this.leftDataAll.findIndex((obj:any) => obj === this.rightData[i])
      if(index != -1){
        this.leftDataAll.splice(index,1)
      }
    }
    this.emitData()
  }

  moveRight(){

    if(this.keepSelection){
      this.rightData = this.rightData.concat(this.leftSelected);
      this.rightSelected = this.rightSelected.concat(this.leftSelected);
    }

    for (let i = 0; i < this.leftSelected.length; i++){
      if(!this.keepSelection){
        this.leftSelected[i].selected = false;
        this.rightData.push(this.leftSelected[i])
        this.rightDataAll.push(this.leftSelected[i])
      }
      let index = this.leftData.findIndex((obj:any) => obj === this.leftSelected[i])

      if(index != -1){
        this.leftData.splice(index,1)
        this.leftDataAll.splice(index,1)
      }

    }
    this.leftSelected = [];
    this.emitData()
  }


  moveAllLeft(){
    this.leftData = this.leftData.concat(this.rightData)
    this.leftDataAll = this.leftData.concat(this.rightData)
    this.rightData = [];
    for (let i = 0; i < this.leftData.length; i++){

      let index = this.rightDataAll.findIndex((obj:any) => obj === this.leftData[i])
      if(index != -1){
        this.rightData.splice(index,1)
        this.rightDataAll.splice(index,1)
      }

    }
    this.emitData()
  }

  moveLeft(){

    if(this.keepSelection){
      this.leftData = this.leftData.concat(this.rightSelected);
      this.leftSelected = this.leftSelected.concat(this.rightSelected);
    }

    for (let i = 0; i < this.rightSelected.length; i++){
      if(!this.keepSelection){
        this.rightSelected[i].selected = false;
        this.leftData.push(this.rightSelected[i])
        this.leftDataAll.push(this.rightSelected[i])
      }
      let index = this.rightData.findIndex((obj:any) => obj === this.rightSelected[i])
      if(index != -1){
        this.rightData.splice(index,1)
        this.rightDataAll.splice(index,1)
      }

    }
    this.rightSelected = [];
    this.emitData()
  }

}
