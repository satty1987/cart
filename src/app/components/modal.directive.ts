import { Directive , OnDestroy , HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnDestroy {

  constructor(private renderer: Renderer2) {
this.renderer.addClass(document.body, 'modal-open');
   }
@HostListener('click') modalOpen() {
this.renderer.addClass(document.body, 'modal-open');
}
ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
