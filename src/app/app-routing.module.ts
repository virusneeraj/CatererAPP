import { CatererDeleteComponent } from './components/caterer/caterer-delete/caterer-delete.component';
import { CatererUpdateComponent } from './components/caterer/caterer-update/caterer-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CatererCrudComponent } from "./views/caterer-crud/caterer-crud.component";
import { CatererCreateComponent } from './components/caterer/caterer-create/caterer-create.component';
import {CatererDetailComponent} from "./components/caterer/caterer-detail/caterer-detail.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "caterers",
    component: CatererCrudComponent
  },
  {
    path: "caterers/detail/:id",
    component: CatererDetailComponent
  },
  {
    path: "caterers/create",
    component: CatererCreateComponent
  },
  {
    path: "caterers/update/:id",
    component: CatererUpdateComponent
  },
  {
    path: "caterers/delete/:id",
    component: CatererDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
