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

  openAddModal():void{
    this.movieModal = true;
  }

  addNewMovie(data:any):void{
    let movieItem:Movie =  new Movie(data['title'],data['year'],data['runtime'],data['genre'],data['director']);
        this.moviesList.push(movieItem);
        this.movieModal = null;

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
    console.log(movie)
    for(let i = 0; this.moviesList.length>i; i++){
      console.log(movie)
      if (this.moviesList[i].id==movie.id){
        console.log(movie)
        this.moviesList[i] = movie;
        this.movieToEdit = null;
        this.movieModal = null;
        break;
      }
      continue;
    }

  }




  deleteMovie():void{
    let index = this.moviesList.map(x => {
      return x.id;
    }).indexOf(this.movieIdToDelete); 
    this.moviesList.splice(index, 1);
    this.popupTitle = null;
  }

  deleteCanceled():void{
    console.log("delete canceled")
    this.popupTitle = null;
  }

  onDeleteClick(movie:Movie):void{
    console.log(movie)
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
    console.log(this.moviesList)
  }
}
