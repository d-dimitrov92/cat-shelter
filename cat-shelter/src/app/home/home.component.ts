import { Component, Input } from '@angular/core';
import { CatsService } from '../cats/cats.service';
import { ICat } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cats: ICat[] | undefined;
  catResults: any;

  constructor(private catsService: CatsService) {
    this.fetchCats();
  }

  fetchCats(): void {
    this.cats = undefined;
    this.catsService.loadCats().subscribe(
      cats => this.cats = cats,
      (err) => console.log(err),
      () => {
        this.catResults = Object.values(this.cats!)[0];
        console.log(this.catResults);
      }
    )
  }
}