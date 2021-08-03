import { Component } from '@angular/core';
import { ICat } from 'src/app/shared/interfaces';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.scss']
})
export class AllCatsComponent {
  // cats: ICat[] | undefined;
  // catResults: any;

  // constructor(private catsService: CatsService) {
  //   this.fetchCats();
  // }

  // fetchCats(): void {
  //   this.cats = undefined;
  //   this.catsService.loadCats().subscribe(
  //     cats => this.cats = cats,
  //     (err) => console.log(err),
  //     () => {
  //       this.catResults = Object.values(this.cats!)[0];
  //       console.log(this.catResults);
  //     }
  //   )
  // }
}
