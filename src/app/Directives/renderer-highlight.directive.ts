import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit{
  // @HostBinding('style.backgroundcolor') color : string;

  constructor(private element : ElementRef,private renderer : Renderer2) { 
    
  }
  
  ngOnInit(): void {
      // this.renderer.setStyle(this.element.nativeElement,'background-color','green')
  }

  @HostListener('mouseenter') onmouseover(event:Event){
    this.renderer.setStyle(this.element.nativeElement,'background-color','green')

  }
  @HostListener('mouseleave') onmouseleave(event:Event){
    this.renderer.setStyle(this.element.nativeElement,'background-color','yellow')

  }
  @HostListener('click') onClick (event:Event){
    this.renderer.setStyle(this.element.nativeElement,'background-color','blue')

  }


}
