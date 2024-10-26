import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true
})
export class HoverCardDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.bottom='10px';
    this.element.nativeElement.style.left='10px';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.bottom='0px';
    this.element.nativeElement.style.left='0px';  }
}
