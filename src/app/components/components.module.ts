import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModules } from '../core/modules/primeng.modules';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { GenderButtonComponent } from './buttons/gender-button/gender-button.component';
import { ButtonComponent } from './buttons/button/button.component';
import { HeaderButtonComponent } from './buttons/header-button/header-button.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    ButtonComponent,
    GenderButtonComponent,
    HeaderButtonComponent,
    FilterPanelComponent,
    CardComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModules,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    LoadingComponent,
    ButtonComponent,
    GenderButtonComponent,
    HeaderButtonComponent,
    FilterPanelComponent,
    CardComponent,
  ],
})
export class ComponentsModule {}
