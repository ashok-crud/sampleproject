import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {LoggingService} from '../services/logging.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[LoggingService]
  // encapsulation:ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  // userName:string ='';
  userLists: string[]=['Ashok']
  name="Ashok name";
  isAvailable :boolean = true;
  value= 25;
  constructor(private loggingService : LoggingService) { }
  onUserAdded(event : string){
    this.userLists.push(event)
  }
  onNameChanged(){
    this.name="Hai Ashok Name"
    // console.log('name changed' + this.name)
    // let loggingservice = new LoggingService();
    this.loggingService.logToConsole('name changed' + this.name)
  }
  onDeleteComponent(){
    this.userLists=[];
  }

  ngOnInit(): void {
  }
 

}
