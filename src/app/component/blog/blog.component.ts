import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToBlogLV() {
    this.router.navigate(['/blogLV']);
  }

  goToBlogPrada() {
    this.router.navigate(['/blogPrada']);
  }

  goToBlogGuess() {
    this.router.navigate(['/blogGuess']);
  }

  goToBlogValentino() {
    this.router.navigate(['/blogValentino']);
  }
}
