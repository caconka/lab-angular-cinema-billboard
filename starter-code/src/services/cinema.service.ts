import { Injectable } from '@angular/core';
import moviesList from '../sample-movies';

interface MOVIE {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class CinemaService {
  movies: Array<MOVIE> = [];

  constructor() { }

  getmovies(): MOVIE[] {
    return this.movies;
  }

  getMovie(id: number) {
    this.movies.forEach(m => {
      if (m.id === id) { return m; }
    });
  }
}
