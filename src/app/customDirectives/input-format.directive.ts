import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) {}

  // @HostListener('focus') onFocus() {
  //   console.log('on focus');
  // }

  @HostListener('blur') onBlur() {
    if (this.format == 'lowercase') {
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
