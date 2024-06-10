import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Observable} from 'rxjs';
import { map, filter, tap } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent, HeaderComponent, RouterOutlet, FooterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projectcatalog';

  interval$!: Observable<number>;
  num$!: Observable<number>;
  ngOnInit()
  {
    this.interval$ = interval(1000);
    this.num$ = this.interval$.pipe(map(value => value*3
    ),filter(value => value < 34), tap(value => console.log(value * 100)))
  }
}
