// ao criar esse componente o 'ng serve' nao compilou com o componente criado
//ele nao tava vendo o novo componente criado
import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [SearchBoxComponent, CardListComponent]
})
export class HomePageComponent implements OnInit {

  constructor( private readonly gifsService: GifsService) { }

  ngOnInit() {
    //do something
  }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }


}
