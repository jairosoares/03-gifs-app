import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces';

const ITEM_HISTORY: string = 'history';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string [] = [];

  private readonly apyKey: string = 'AAVXkp9AYqzjh4BXgJktjo4J2FA5NtXu';

  private readonly serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor(private readonly http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    // ele optou por copiar os object e nao usar a referencia com spread
    return [...this._tagsHistory];
  }

  searchTag(tag: string):void {
    if (tag.length == 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set("api_key", this.apyKey)
      .set("limit", '10')
      .set("q", tag);

    this.http.get<SearchReponse>(`${ this.serviceUrl }/search`, {params})
      .subscribe( resp => {
        this.gifList = resp.data;
      });
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag != tag )
    }
    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0,10);

    this.saveLocalStorage();

  }

  private saveLocalStorage(): void {
    localStorage.setItem(ITEM_HISTORY, JSON.stringify( this._tagsHistory));
  }

  private loadLocalStorage(): void {
    
    if (!localStorage.getItem(ITEM_HISTORY)) return;

    this._tagsHistory = JSON.parse( localStorage.getItem(ITEM_HISTORY)! );

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);

  }

}
