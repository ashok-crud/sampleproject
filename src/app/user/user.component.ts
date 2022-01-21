import { Component, Input, OnChanges,SimpleChanges ,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() user :string= ''
  @Input() name: string='';
  constructor() { 
    console.log("constructor is called")
  }

  ngOnInit(): void {
    console.log("ngoninit called")
  }
  ngOnChanges(element: SimpleChanges): void {
    console.log("ngOnchanges called")
    console.log(element)
      
  }
  ngDoCheck(): void {
      console.log("ngDocheck called")
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentinit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentchecked")
  }

  ngAfterViewInit(): void {
      console.log("ngAfterViewInit called")
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterviewchecked called")
  }
  ngOnDestroy(){
    console.log("ngondestroy called")
  }

}
