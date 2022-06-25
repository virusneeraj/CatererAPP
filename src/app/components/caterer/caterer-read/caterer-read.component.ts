import { CatererService } from '../service/caterer.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {environment} from "../../../../environments/environment";
import {Caterer} from "../model/caterer/caterer.content.model";
import {Data} from "../model/pagination/data.model";
import {SortOrder} from "../model/pagination/sort-order.enum";
import {Observable} from "rxjs";
import {Response} from "../model/response.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-caterer-read',
  templateUrl: './caterer-read.component.html',
  styleUrls: ['./caterer-read.component.css']
})
export class CatererReadComponent implements OnInit {


  displayedColumns = ['id', 'name', 'city', 'capacity', 'contact'];
  pageData: Data = {} as Data;
  page: number = environment.default_settings.page;
  size: number = environment.default_settings.size;
  loading: boolean = false;


  constructor(private catererService: CatererService, private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.page = +params.page ? +params.page : environment.default_settings.page;
      this.size = +params.size ? +params.size: environment.default_settings.size;

    });
    this.loadData(this.page, this.size, environment.default_settings.sort, environment.default_settings.order);
  }

  loadData(page: number, size: number, sort: string, order:SortOrder) {
    this.loading = true;
    this.catererService.getCaterer(page,size,sort,order)
      .subscribe(apiResponse => {
        // console.log(apiResponse);
        this.pageData = apiResponse.data;
        //this.catererData = apiResponse.data.content;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  pageEvents(event: PageEvent){
    if(event.pageSize){
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          page: event.pageIndex,
          size: event.pageSize
        },
        queryParamsHandling: 'merge',
      });
    }
      this.loadData(event.pageIndex, event.pageSize,  environment.default_settings.sort, environment.default_settings.order);
    }


  rowSelected(caterer: Caterer) {
    this.router.navigate(['caterers','detail',caterer.id]);
  }
}
