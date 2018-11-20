import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Movie } from '../movies-list/movie';

@Component({
  selector: 'add-or-edit-popup',
  templateUrl: './add-or-edit-popup.component.html',
  styleUrls: ['./add-or-edit-popup.component.css']
})
export class AddOrEditPopupComponent implements OnInit {
  
  
  @Input()movieToEdit:Movie;
  @Input()moviesArr:Movie[];
  newMovie:Movie;
  editedMovie:Movie;
  formTitle:string = "Add Movie"
 


  @Output()formCanceled:EventEmitter<string> = new EventEmitter<string>();
  @Output()formNewData:EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output()formEditedData:EventEmitter<Movie> = new EventEmitter<Movie>();

  
  
  cancelForm():void{
    this.formCanceled.emit()
  }

  addNewMovie():void{
    this.formNewData.emit(this.newMovie)
  }

  editMovie():void{
    this.formEditedData.emit(this.editedMovie)
  }



  movieForm:FormGroup;
  title:FormControl;
  year:FormControl;
  runtime:FormControl;
  genre:FormControl;
  director:FormControl;


  onSubmit(form){
    console.log(form)
    if(this.movieToEdit){
      this.editedMovie = form;
      this.editedMovie.id = this.movieToEdit.id;
      this.editMovie()
    }
    else{
      this.newMovie = form;
      this.addNewMovie()
    }
    
  };


  constructor(private fb : FormBuilder,) {
    
   }

 

  addModeFormControls(){
    this.title = new FormControl('',[Validators.required,]);
    this.year = new FormControl('',Validators.required);
    this.runtime = new FormControl('',Validators.required);
    this.genre = new FormControl('',Validators.required);
    this.director = new FormControl('',Validators.required);

  }
  editModeFormControls(){
    this.title = new FormControl(this.movieToEdit.title,[Validators.required,]);
    this.year = new FormControl(this.movieToEdit.year,Validators.required);
    this.runtime = new FormControl(this.movieToEdit.runtime,Validators.required);
    this.genre = new FormControl(this.movieToEdit.genre,Validators.required);
    this.director = new FormControl(this.movieToEdit.director,Validators.required);

  }

  createForm(){
      this.movieForm = this.fb.group({
        'title': this.title,
        'year': this.year,
        'runtime': this.runtime,
        'genre': this.genre,
        'director': this.director,  
      })
  }

  ngOnInit() {
    if(this.movieToEdit){
      this.editModeFormControls()
    }
    else{
      this.addModeFormControls()
    }
    this.createForm();
    
   

}}
