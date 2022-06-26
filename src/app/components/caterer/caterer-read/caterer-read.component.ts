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
import {Sort} from "@angular/material/sort";

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
  sort: string = environment.default_settings.sort;
  order: string = environment.default_settings.order;
  loading: boolean = false;
  id: string = '';
  city: string = '';


  constructor(private catererService: CatererService, private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.page = +params.page ? +params.page : environment.default_settings.page;
      this.size = +params.size ? +params.size: environment.default_settings.size;
      this.sort = params.sort ? params.sort: 'id';
      this.order = params.order ? params.order: 'asc';
      this.city = params.city ? params.city: '';
    });
    this.loadData(this.page, this.size, this.sort, this.order, this.city);
  }

  loadData(page: number, size: number, sort: string, order:any, city: string) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: page,
        size: size,
        sort: sort,
        order: order,
        city: city,
      },
      queryParamsHandling: 'merge',
    });
    this.loading = true;
    this.catererService.getCaterer(page,size,sort,order, city)
      .subscribe(apiResponse => {
        // console.log(apiResponse);
        this.pageData = apiResponse.data;
        //this.catererData = apiResponse.data.content;
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  pageEvents(event: PageEvent) {
    if (event.pageSize) {
      this.loadData(event.pageIndex, event.pageSize, environment.default_settings.sort, environment.default_settings.order, this.city);
    }
  }


  rowSelected(caterer: Caterer) {
    this.router.navigate(['caterers','detail',caterer.id]);
  }

    searchByCity(city: any) {
      this.page = environment.default_settings.page;
      this.size = environment.default_settings.size;
    this.city = city;
      this.loadData(this.page, this.size, environment.default_settings.sort, environment.default_settings.order, this.city);
    }

  sortData(sort: Sort) {
   console.log("sfdgsha", sort);
    switch (sort.active){
      case 'city':
        this.sort = 'location.city';
        break;
      case 'maximum':
        this.sort = 'capacity.maximum';
        break;
      default:
        this.sort = sort.active;
    }

    this.order = sort.direction;
    this.page = 0;
    this.loadData(this.page, this.size, this.sort, this.order, this.city);
  }

  searchByNameOrId(idOrname: string) {
    this.router.navigate(['caterers','detail',idOrname]);
  }

}
