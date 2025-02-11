import { Component } from '@angular/core';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    GifsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
