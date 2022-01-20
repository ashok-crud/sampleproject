import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // userName : string = '';
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput') userInput:any;
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded(){
    console.log(this.userInput)
    // this.userAdded.emit(this.userName)
    // this.userAdded.emit(input.value)
    this.userAdded.emit(this.userInput.nativeElement.value)

  }

}
