import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgForOf, TitleCasePipe} from '@angular/common';
import {RoomList} from '../rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    NgForOf,
    TitleCasePipe,
    NgClass
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{

  @Input() roomList: RoomList[] = [];
  @Input() title: string= '';

  //Event callback and name of this event is selectedRoom
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void{

  }

  ngOnChanges(changes: SimpleChanges):void{
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  bookRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }
}
