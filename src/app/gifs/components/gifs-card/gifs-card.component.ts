import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { LazyImageComponent } from "../../../shared/components/lazy-image/lazy-image.component";


@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css'],
  imports: [LazyImageComponent]
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!:Gif;

  constructor() { }

  ngOnInit() {
    // do something
  }

}
