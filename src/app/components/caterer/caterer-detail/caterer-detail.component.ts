import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { map } from 'rxjs/operators';
import {CatererService} from "../service/caterer.service";
import {Caterer} from "../model/caterer/caterer.content.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-caterer-detail',
  templateUrl: './caterer-detail.component.html',
  styleUrls: ['./caterer-detail.component.css']
})
export class CatererDetailComponent implements OnInit {

  id: string | null | undefined;
  caterer: Caterer | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private catererService: CatererService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id)
      this.loadData(this.id);
  }

  loadData(id: string){
    this.catererService.readById(id)
      .subscribe(apiResponse => {
        this.caterer = apiResponse.data;
      });
  }

  backClicked() {
    this.location.back();
  }

}
