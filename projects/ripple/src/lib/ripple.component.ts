import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: '[ripple]',
  template: '<ng-content></ng-content>',
  styles: [`
    /* Add animation */
    @keyframes ripple-effect {
      from {
        opacity: 1;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(10);
      }
    }
    .ripple {
      position: absolute;
      /* ripple effect should be in round shape */
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
      animation: ripple-effect 1s;
      opacity: 0;
    }
  `],
  exportAs: 'ripple'
})
export class RippleComponent {

  public initialPosition: string = '';
  public initialOverflow: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    this.initialPosition = this.element.nativeElement.style.position;
    this.initialOverflow = this.element.nativeElement.style.overflow;
    this.element.nativeElement.style.position = 'relative';
    this.element.nativeElement.style.overflow = 'hidden';
    this.createChild(event);
  }

  private createChild(event: MouseEvent) {
    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'ripple');
    const bounds = this.element.nativeElement.getBoundingClientRect();
    // Get position on X Axis
    const x = event.clientX - bounds.left;
    // Get position on Y Axis
    const y = event.clientY - bounds.top;
    this.renderer.setStyle(span, 'left', `${x}px`);
    this.renderer.setStyle(span, 'top', `${y}px`);
    this.renderer.appendChild(this.element.nativeElement, span);
    this.removeChild(span);
  }

  private removeChild(childElement: any) {
    setTimeout(() => {      
      this.renderer.removeChild(this.element.nativeElement, childElement);
      this.element.nativeElement.style.position = this.initialPosition;
      this.element.nativeElement.style.overflow = this.initialOverflow;
    }, 300);
  }

}
