import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent {

  constructor(
    private catsService: CatsService,
    private router: Router
    ) { }

  createCat(form: NgForm): void {
    if (form.invalid) { return; }
    this.catsService.saveCat(form.value).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
