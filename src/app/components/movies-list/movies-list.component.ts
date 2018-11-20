import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies-service.service';
import { Movie } from './movie';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  
  popupTitle:string = null
  formTitle:string = null
  movieModal:boolean = false
  movieToEdit:Movie;

  moviesList:Movie[] = [];
  moviesTitlesArray:string[] = ['The Lion King','The Shawshank Redemption','Inception','Jurassic Park','The Lord of the Rings'];
  movieIdToDelete:number;
  movieToDelete:Movie;
  errorMessage:string;

  openAddModal():void{
    this.movieModal = true;
  }

  addNewMovie(data:any):void{
    if(this.checkIfMovieTitleExist(data)){    
      this.errorMessage = "Movie title already exist. Do you want to try again?"
    }
    else{
      this.errorMessage = null
      let movieItem:Movie =  new Movie(data['title'],data['year'],data['runtime'],data['genre'],data['director']);
      this.moviesList.push(movieItem);
      this.movieModal = null;
    }
   

  }

  closeError(){
    this.errorMessage = null
  }


  onEditClick(movie:Movie):void{
    this.movieToEdit = movie
    this.movieModal = true;
  }

  cancelModal(e):void{
    this.movieToEdit = null;
    this.movieModal = null;
  }
  editMovie(movie:Movie){
    if(this.checkIfMovieTitleExist(movie)){
      this.errorMessage = "Movie title already exist. Do you want to try again?"
    }
    else{
      for(let i = 0; this.moviesList.length>i; i++){
        if (this.moviesList[i].id==movie.id){
          this.moviesList[i] = movie;
          this.movieToEdit = null;
          this.movieModal = null;
          break;
        }
        continue;
      }
    }
  }


checkIfMovieTitleExist(movie : Movie) {
    for (let i = 0; this.moviesList.length > i; i++) {
        if(i+1==movie.id){
          continue;
        }
        else{
          if (this.moviesList[i].title == movie.title) {
            return true;
        } else {
            continue;
        }
        }
        
    }
    return false;
}




  deleteMovie():void{
    let index = this.moviesList.map(x => {
      return x.id;
    }).indexOf(this.movieIdToDelete); 
    this.moviesList.splice(index, 1);
    this.popupTitle = null;
  }

  deleteCanceled():void{
    this.popupTitle = null;
  }

  onDeleteClick(movie:Movie):void{
    this.movieIdToDelete = movie.id;
    this.movieToDelete = movie;
    this.popupTitle = "Are you sure that you want to delete ";
  }

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.moviesTitlesArray.forEach(title => {
      this.moviesService.getMovieData(title).subscribe((data) => {
        let movieItem:Movie =  new Movie(data['Title'],data['Year'],data['Runtime'],data['Genre'],data['Director']);
        this.moviesList.push(movieItem);
        
      })   
    });
  }
}
