import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation:ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {
  // userName:string ='';
  userLists: string[]=[]
  constructor() { }
  onUserAdded(event : string){
    this.userLists.push(event)
  }

  ngOnInit(): void {
  }

}
