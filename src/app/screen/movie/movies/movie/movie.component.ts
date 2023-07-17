import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviesController } from '../../../../core/controllers/movie/movies.controller';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  constructor(private movieController: MoviesController) {}

  ngOnInit(): void {}
}
