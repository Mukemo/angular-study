import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    console.log(el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null!);
  }

  private highlight(color: string) {
    const element = this.el.nativeElement as HTMLHeadingElement;
    element.style.color = color;
  }
}
