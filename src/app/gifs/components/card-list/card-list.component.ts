import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';
import { GifsCardComponent } from "../gifs-card/gifs-card.component";


@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  imports: [CommonModule, GifsCardComponent]
})
export class CardListComponent implements OnInit {

  @Input()
  public gifs: Gif[] = [];

  constructor() { }

  ngOnInit() {
    // do something
  }

}
