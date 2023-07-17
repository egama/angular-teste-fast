import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit {
  hidden: boolean = false;
  @Input() development: boolean = false;
  constructor() {}
  ngOnInit(): void {
    if (!this.development) {
      setTimeout(() => {
        this.hidden = true;
      }, 100);
    }
  }
}
