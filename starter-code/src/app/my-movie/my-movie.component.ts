import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIE, CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: MOVIE;

  constructor(private thisMovie: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.movie = this.thisMovie.getMovie(Number(p['id'])));
  }

}
