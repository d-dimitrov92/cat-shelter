import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllCatsComponent } from "./all-cats/all-cats.component";
import { CatDetailsComponent } from "./cat-details/cat-details.component";
import { CreateCatComponent } from "./create-cat/create-cat.component";

const routes: Routes = [
    {
        path: 'create-cat',
        component: CreateCatComponent
    },
    {
        path: 'details/:id',
        component: CatDetailsComponent
    },
    // {
    //     path: 'all-cats',
    //     component: AllCatsComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CatsRoutingModule { }