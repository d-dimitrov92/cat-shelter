import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCatsComponent } from './all-cats/all-cats.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsService } from './cats.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllCatsComponent,
    CatDetailsComponent,
    CreateCatComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    FormsModule
  ],
  providers: [
    CatsService
  ]
})
export class CatsModule { }
