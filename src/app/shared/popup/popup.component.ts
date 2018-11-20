import { Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Movie } from 'src/app/components/movies-list/movie';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() title:string;
  @Input() itemToDelete:Movie;
  itemTitle:string;
  

  @Output()deleteApproved:EventEmitter<string> = 
  new EventEmitter<string>()


  @Output()deleteCanceled:EventEmitter<string> = 
  new EventEmitter<string>()

  
  onApproved():void{
    this.deleteApproved.emit()
  }
  onCancel():void{
    this.deleteCanceled.emit()
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.itemTitle = this.itemToDelete.title;
    // this.document.body.classList.add('blur');
  }

}
