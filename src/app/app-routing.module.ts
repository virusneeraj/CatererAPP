import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./views/home/home.component";
import {CatererCreateComponent} from './components/caterer/caterer-create/caterer-create.component';
import {CatererDetailComponent} from "./components/caterer/caterer-detail/caterer-detail.component";
import {CatererReadComponent} from "./components/caterer/caterer-read/caterer-read.component";


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "caterers",
        component: CatererReadComponent
    },
    {
        path: "caterers/detail/:id",
        component: CatererDetailComponent
    },
    {
        path: "caterers/create",
        component: CatererCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
