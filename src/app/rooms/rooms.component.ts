import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import { Room, RoomList } from './rooms';
import {
  JsonPipe,
  NgIf,
  NgStyle,
} from '@angular/common';
import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-rooms',
  imports: [
    NgIf,
    NgStyle,
    RoomsListComponent,
    JsonPipe,
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit{

  hotelName = 'Hotel California';
  numberOfRooms:any = 10;
  hideRooms = false;
  rooms: Room={
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  //creating new instance of Header Component
  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent

  roomList: RoomList[] = []
  selectedRoom!: RoomList

  title:string = 'Room List';
  constructor() {}


  ngOnInit(): void{
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 4.5
      },
      {
        roomNumber:2,
        roomType: 'Standard Room',
        amenities: 'Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 300,
        photos: 'https://images.unsplash.com/photo-1596295187052-185554952070?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('12-Nov-2022'),
        checkoutTime: new Date('13-Nov-2022'),
        rating: 4.0
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 5.0
      }
    ]
  }

  ngDoCheck(): void {
    console.log("Ng Do check is called!!");
  }

  ngAfterViewInit():void {
    console.log(this.headerComponent);
  }

  toggleRooms(){
    this.hideRooms =!this.hideRooms;
    this.title="Rooms List "
  }
  hideRoomsDetails(){
    this.rooms.availableRooms=null;
  }
  showRoomsDetails(){
    this.rooms.availableRooms=10;
  }

  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5
    }
    //this.roomList.push(room);

    //spread operator
    this.roomList = [...this.roomList,room];
  }
}
