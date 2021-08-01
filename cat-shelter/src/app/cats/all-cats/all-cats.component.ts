import { Component } from '@angular/core';
import { ICat } from 'src/app/shared';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.scss']
})
export class AllCatsComponent {
  cats: ICat[] | undefined

  constructor(private catsService: CatsService) {
    this.fetchCats();
    setTimeout(() => {
      console.log(Object.entries(this.cats!));

    }, 1000)
  }

  fetchCats(): void {
    this.cats = undefined;
    this.catsService.loadCats().subscribe(cats => this.cats = cats);
  }
}
