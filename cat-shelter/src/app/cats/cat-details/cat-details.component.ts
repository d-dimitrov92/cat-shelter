import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICat } from 'src/app/shared/interfaces';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent {

  cat: ICat | undefined;

  constructor(
    private catsService: CatsService,
    private activatedRoute: ActivatedRoute) {
    this.fetchCat();
   }

   fetchCat(): void {
    this.cat = undefined;
    const catId = this.activatedRoute.snapshot.params.id

    this.catsService.loadCat(catId).subscribe({
      next: cat => this.cat = cat,
      error: (err) => console.log(err)
    });
   }

}
