import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviesController } from '../../../core/controllers/movie/movies.controller';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  constructor(private movieController: MoviesController) {}
  movies: any = [];
  genders: any;

  loadedPages: any = {
    morePage: 0,
    searchPage: 0,
  };
  isButtonloadedPages: any = {
    isMoreButton: false,
    isSearchButton: false,
  };
  isSearch: boolean = false;

  @ViewChild('loadMorePage') buttonLoadMorePage: any;

  selectedsIdGender: number[] = [];

  getMovies = async (page: number = 1) => {
    const response: any = await this.movieController.getMoviesPagination(page);
    this.movies = [...this.movies, ...response];
  };

  getMoviesSearch = async (page: number = 1) => {
    const response: any =
      await this.movieController.getMoviesFilteredByIdGenrePagination(
        this.selectedsIdGender,
        page
      );
    console.log('this.loadedPages.searchPage', this.loadedPages.searchPage);
    this.movies =
      this.loadedPages.morePage != 0 || this.loadedPages.searchPage > 1
        ? [...this.movies, ...response.results]
        : response.results;
  };

  loadMorePages = () => {
    if (this.isSearch) {
      this.loadedPages.searchPage++;
      this.loadedPages.morePage = 0;
      this.isButtonloadedPages.isSearchButton = true;
      this.getMoviesSearch(this.loadedPages.searchPage);
    } else {
      if (this.loadedPages.searchPage > 0) {
        this.isButtonloadedPages.isMoreButton = true;
      }
      this.loadedPages.morePage++;
      this.loadedPages.searchPage = 0;
      this.getMovies(this.loadedPages.morePage);
    }
  };

  // pesquisa global
  search = () => {
    this.loadedPages.searchPage = 1;
    this.isButtonloadedPages.isSearchButton = false;
    this.isButtonloadedPages.isMoreButton = false;
    this.isSearch = true;
    this.getMoviesSearch(this.loadedPages.searchPage);
  };

  // pesquisa card filtros
  genderSearh = (index: any, idGender: any) => {
    const exist = this.selectedsIdGender.findIndex((id) => id === idGender);
    exist != -1
      ? this.selectedsIdGender.splice(exist, 1)
      : this.selectedsIdGender.push(idGender);
    this.genders[index].selected = !this.genders[index].selected;
  };

  getGenders = async () => {
    this.genders = await this.movieController.getAllGenres();
  };

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isButtonloadedPages.isMoreButton && this.isButtonVisible())
      this.autoClickButton();
  }

  isButtonVisible() {
    if (this.buttonLoadMorePage) {
      const buttonRect =
        this.buttonLoadMorePage.nativeElement.getBoundingClientRect();
      return buttonRect.top >= 0 && buttonRect.bottom <= window.innerHeight;
    }
    return false;
  }

  autoClickButton() {
    if (this.buttonLoadMorePage) this.buttonLoadMorePage.nativeElement.click();
  }

  ngOnInit(): void {
    this.getMovies();
    this.getGenders();
  }
}
