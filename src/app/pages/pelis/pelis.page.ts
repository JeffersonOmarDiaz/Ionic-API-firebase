import { Component, OnInit } from '@angular/core';
//importaciones de api
import { Observable } from "rxjs";
import { PeliService } from "../../services/peli.service";
import { IPelis } from "../../model/IPelis.interface";

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  results: Observable <IPelis>;
  resultsMovie: Observable <IPelis>;
  resultsOMDB: Observable <IPelis>;
  term: string='';
  type: string='';
  constructor(private peliService: PeliService) { }

  ngOnInit() {
  }

  searchChanged(): void{
    this.results = this.peliService.searchMovies(this.type);
    //http://www.omdbapi.com/?s=spider&type=&apikey=b73873af
  }
  searchOMDb(): void{
    this.resultsOMDB = this.peliService.searchMoviesOMDb(this.term, this.type);
    //http://www.omdbapi.com/?s=spider&type=&apikey=b73873af
  }
  searchMovie(): void{
    this.resultsMovie = this.peliService.searchMovies(this.type);
  }
  
}
