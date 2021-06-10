import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoBank';

  screenW = window.innerWidth;

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenW = window.innerWidth;
  }
}
