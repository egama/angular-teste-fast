import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Color } from 'src/app/core/utils/type-color';

@Component({
  selector: 'app-gender-button',
  templateUrl: '../button/button.component.html',
})
export class GenderButtonComponent extends ButtonComponent {
  @Input() isSelected!: boolean;

  constructor() {
    super();
    this.isSelected = this.isSelected;
    this.textColor = 'dark';
    this.backgroundColor = this.isSelected ? 'secondary' : 'white';
    this.borderColor = this.isSelected ? 'secondary' : 'gray';
    this.textColor = this.isSelected ? 'white' : this.textColor;
    this.backgroundColorHover = 'secondary';
    this.borderColorHover = 'secondary';
    this.borderRadius = 30;
    this.class = `${this.class} c-fs-14`;
  }

}
