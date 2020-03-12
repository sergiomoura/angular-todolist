import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) {
    if (el.nativeElement.focus) {
      el.nativeElement.focus();
    }
  }

}
