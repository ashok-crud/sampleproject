import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighLightText]'
})
export class HighLightTextDirective implements OnInit{
    constructor(private element:ElementRef){}

    ngOnInit(){
        (<HTMLInputElement> this.element.nativeElement).style.backgroundColor = 'red'
    
    }

}

