export interface IPelis {
    //variables de www.themoviedb.org PELICULAS
    title: string;
    poster_path: string;
    original_language: string;
    overview: string;
    release_date: string;
    id: number;
    vote_average: number;
    original_title: string;
    //TELEVISION
    name: string;
    first_air_date: string;

    //variables de http://www.omdbapi.com/
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    Genre: string;
    Director: string;
    Language: string;
}