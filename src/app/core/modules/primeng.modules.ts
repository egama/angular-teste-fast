import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [InputTextModule, ButtonModule,PanelModule],
  exports: [InputTextModule, ButtonModule,PanelModule],
  providers: [],
})
export class PrimeNGModules {}
