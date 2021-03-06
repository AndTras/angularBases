import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje;
  @Output() clickPost = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickPost.emit(this.mensaje.id)
    console.log(this.mensaje.id)
  }
}
