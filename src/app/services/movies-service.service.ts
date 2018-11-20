import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  omdbApikey:string = "aa39bf52";


  uri:string = "https://www.omdbapi.com/?apikey="+this.omdbApikey;



  getMovieData(title){
    return this.http.get(this.uri+ "&t="+title);

  } 

  constructor(private http: HttpClient) { }
}
