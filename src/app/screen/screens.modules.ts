import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenRoutingModule } from './screens-routing.modules';
import { ComponentsModule } from '../components/components.module';
import { MoviesModule } from './movie/movies.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ScreenRoutingModule,
    ComponentsModule,
    MainModule,
    MoviesModule
  ],
  providers: [],
  exports: [],
})
export class ScreensModule {}
