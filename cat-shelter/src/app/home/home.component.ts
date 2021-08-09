import { Component } from '@angular/core';
import { CatsService } from '../cats/cats.service';
import { ICat } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  cats: ICat[] | undefined;
  isCats: boolean = false;

  constructor(private catsService: CatsService) {
    this.fetchCats();
  }

  fetchCats() {
    this.cats = undefined;
    this.catsService.loadCats().subscribe({
      next: cats => this.cats = cats,
      error: (err) => console.log(err),
      complete: () => {
        if (this.cats!.length > 0) {
          this.isCats = true;
        }
      }
    });
  }
}