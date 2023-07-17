import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Color, Height } from 'src/app/core/utils/type-color';

interface FilterPanelProps {
  header: string;
  class: string;
  collapsed: boolean;
}
@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
})
export class FilterPanelComponent implements FilterPanelProps, OnInit {
  @Input() header = '2';
  @Input() class = '';
  @Input() collapsed = true;

  constructor() {}
  ngOnInit(): void {}
}
//
