import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './../movie';

@Component({
  selector: 'movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  @Input() movieData:Movie

  @Output()delete:EventEmitter<Movie> = new EventEmitter<Movie>();

  @Output()edit:EventEmitter<Movie> = new EventEmitter<Movie>();

  editItem(event):void{
    this.edit.emit()
  }

  deleteItem(event):void{
    this.delete.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
