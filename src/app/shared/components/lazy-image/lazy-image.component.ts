import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
  imports: [CommonModule]
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt:string = "";

  public hasLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
    if (!this.url) throw Error("URL property is requered")
  }

  onLoad() {
    //this.hasLoaded = true;

    //efeito demora pra teste de carregar imagem
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500)
  }

}
