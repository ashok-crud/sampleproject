import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation:ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  // userName:string ='';
  userLists: string[]=['Ashok']
  name="Ashok name";
  isAvailable :boolean = true;
  value= 25;
  constructor() { }
  onUserAdded(event : string){
    this.userLists.push(event)
  }
  onNameChanged(){
    this.name="Hai Ashok Name"
  }
  onDeleteComponent(){
    this.userLists=[];
  }

  ngOnInit(): void {
  }
 

}
