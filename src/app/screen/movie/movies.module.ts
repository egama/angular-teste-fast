import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { PrimeNGModules } from '../../core/modules/primeng.modules';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movies/movie/movie.component';

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MoviesRoutingModule,
    ComponentsModule,
    PrimeNGModules,
  ],

  providers: [],
  exports: [],
})
export class MoviesModule {}
