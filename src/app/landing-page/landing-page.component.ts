import { Component } from '@angular/core';

interface Project {
  name: string;
  initiator: string;
  tags: string[];
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}