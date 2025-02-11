import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {

  constructor(private readonly gifsService: GifsService) { }

  ngOnInit() {
    //do something
  }


  get tagsHistory(): string[] {
    return this.gifsService.tagHistory;
  }

  searchTag(tag: string):void {
    this.gifsService.searchTag(tag);
  }

}
