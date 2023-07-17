import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header-button',
  templateUrl: '../button/button.component.html',
})
export class HeaderButtonComponent extends ButtonComponent {
  constructor() {
    super();
    this.backgroundColor = 'primary';
    this.backgroundColorHover = 'primary';
    this.borderColor = 'primary';
    this.borderColorHover = 'primary';
  }
}
