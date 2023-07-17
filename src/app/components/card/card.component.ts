import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Color, Height } from 'src/app/core/utils/type-color';

interface CardProps {
  movie: any;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements CardProps, OnInit {
  @Input() movie: any = {};

  constructor() {}
  ngOnInit(): void {}
}
//
