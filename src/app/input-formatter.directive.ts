import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFucus() {
    console.log('On focus')
  }

  @HostListener('blur') onBlur() {
    console.log('on Blur')
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
