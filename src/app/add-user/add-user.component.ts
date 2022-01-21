import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service'


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[LoggingService]
})
export class AddUserComponent implements OnInit {
   userName : string = '';
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput') userInput:any;
  constructor( private loggingService:LoggingService) { }

  ngOnInit(): void {
  }
  onUserAdded(){
    console.log(this.userInput)
   this.userAdded.emit(this.userName)
    // this.userAdded.emit(input.value)
    // this.userAdded.emit(this.userInput.nativeElement.value)
    // let loggingService = new LoggingService();
    this.loggingService.logToConsole('user is added' + this.userName)
    // console.log('user is added' + this.userName)

  }

}
