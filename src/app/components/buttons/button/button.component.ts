import {
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Color, Height } from 'src/app/core/utils/type-color';

interface ButtonProps {
  class: string;
  label: string;
  type: string;
  disabled: boolean;
  backgroundColor: Color;
  backgroundColorHover: Color;
  borderRadius: number;
  borderColor: Color;
  borderColorHover: Color;
  textColor: Color;
  textColorHover: Color;
  height: Height;
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements ButtonProps, OnInit {
  @ViewChild('app_button') appButton!: ElementRef;
  @Input() class = '';
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() backgroundColor: Color = 'secondary';
  @Input() backgroundColorHover: Color = 'primary';
  @Input() borderRadius: number = 8;
  @Input() borderColor: Color = 'secondary';
  @Input() borderColorHover!: Color;
  @Input() textColor: Color = 'white';
  @Input() textColorHover: Color = 'white';
  @Input() height: Height = '28px';
  definedClasses: string = '';

  setClass = () => {
    this.borderColor = this.borderColor || this.backgroundColor;
    this.borderColorHover = this.borderColorHover || this.backgroundColorHover;
    if (this.disabled)
      return `
    ${this.class}
    c-bg-color-gray
    c-border-color-hover-gray
    c-color-white
    c-border-radius-${this.borderRadius}
    `;

    return `
    ${this.class}
    c-bg-color-${this.backgroundColor}
    c-border-color-${this.borderColor}
    c-bg-hover-${this.backgroundColorHover}
    c-border-color-hover-${this.borderColorHover}
    c-color-${this.textColor}
    c-color-hover-${this.textColorHover}
    c-border-radius-${this.borderRadius}
    `;
  };

  constructor() {}
  ngOnInit(): void {
    this.definedClasses = this.setClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isSelected']) {
      this.updateButtonStyle();
      this.definedClasses = this.setClass();
      this.disabled = this.disabled
    }
  }

  private updateButtonStyle() {
    this.backgroundColor = this.backgroundColor;
    this.borderColor = this.borderColor;
    this.textColor = this.textColor;
  }
}
//
