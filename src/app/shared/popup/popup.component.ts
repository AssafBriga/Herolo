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
  

  @Output()approved:EventEmitter<string> = 
  new EventEmitter<string>()


  @Output()canceled:EventEmitter<string> = 
  new EventEmitter<string>()

  
  onApproved():void{
    this.approved.emit()
  }
  onCancel():void{
    this.canceled.emit()
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    if(this.itemToDelete){this.title = this.title+ " "+ this.itemToDelete.title+"?";}
    // this.document.body.classList.add('blur');
  }

}
