import { Injectable } from '@angular/core';
//imposaciones para el api

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IPelis } from "../model/IPelis.interface";
//import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string = '';
  private apiKey: string = '8677121ba12d59d8ead2cb7b039dfba8';
  private apiKeyOMDb: string ='b73873af';
  constructor(private http: HttpClient) { 
  }

  searchMovies(type: string){
    //this.url = `https://api.themoviedb.org/3/tv/530?api_key=8677121ba12d59d8ead2cb7b039dfba8`;
    console.log('La opcion fue: '+ type);
    this.url = `https://api.themoviedb.org/3/discover/${type}?api_key=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IPelis>(this.url).pipe(map(
      results => results['results']
    ));
  }
  
  
  getDetails1(id: string, type: string){
    console.log('LLega detalles  general' + 'El tipos es de '+type );
    if (this.http.get<IPelis>(`https://api.themoviedb.org/3/tv/${id}?api_key=8677121ba12d59d8ead2cb7b039dfba8`)!=null) {
      return this.http.get<IPelis>(`https://api.themoviedb.org/3/movie/${id}?api_key=8677121ba12d59d8ead2cb7b039dfba8`);
    }else{
      return this.http.get<IPelis>(`https://api.themoviedb.org/3/tv/${id}?api_key=8677121ba12d59d8ead2cb7b039dfba8`);
    }
  }

  searchMoviesOMDb(title: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKeyOMDb}`;
      return this.http.get<IPelis>(this.url).pipe(map(
        results => results['Search']
        ));
  }

  getDetails(id: string, type: string){
    let numero: number;
    if (numero = parseInt(id)) {
      console.log('conprovado que esta mal');
      return this.http.get<IPelis>(`https://api.themoviedb.org/3/tv/${id}?api_key=8677121ba12d59d8ead2cb7b039dfba8`);
    }else{
      console.log('conprovado que esta bien');
      console.log('LLega detalles a OMDB');
    return this.http.get<IPelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=${this.apiKeyOMDb}`);
    }
    
  }
}
