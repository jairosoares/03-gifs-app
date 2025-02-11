import { GifsService } from './../../services/gifs.service';
//a-component
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscas:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})

export class SearchBoxComponent implements OnInit {

@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly gifsService: GifsService) { }

  ngOnInit() {
    // do something
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
