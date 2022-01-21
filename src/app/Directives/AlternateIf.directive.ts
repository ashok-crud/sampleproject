import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef,SimpleChanges } from "@angular/core";

@Directive({
    selector:'[appAlternateIf]',
})

export class AlternateIfDirective implements OnChanges{
     @Input() appAlternateIf:boolean = true;
    constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef){}
    ngOnChanges(changes: SimpleChanges): void {
        if(this.appAlternateIf){
            this.vcRef.createEmbeddedView(this.templateRef)
        } else{
            this.vcRef.clear()
        }
    }

   

}