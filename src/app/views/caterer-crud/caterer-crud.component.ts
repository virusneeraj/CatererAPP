import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-caterer-crud",
  templateUrl: "./caterer-crud.component.html",
  styleUrls: ["./caterer-crud.component.css"],
})
export class CatererCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Caterer Syatem",
      icon: "storefront",
      routeUrl: "/caterers",
    };
  }

  ngOnInit(): void {}

  navigateToCatererCreate(): void {
    this.router.navigate(["/caterers/create"]);
  }
}
