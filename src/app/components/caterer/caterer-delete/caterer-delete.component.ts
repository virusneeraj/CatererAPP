import { Router, ActivatedRoute } from "@angular/router";
import { CatererService } from "../service/caterer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caterer-delete",
  templateUrl: "./caterer-delete.component.html",
  styleUrls: ["./caterer-delete.component.css"],
})
export class CatererDeleteComponent implements OnInit {
  caterer: any;

  constructor(
    private catererService: CatererService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +!this.route.snapshot.paramMap.get("id");

  }

  deleteCaterer(): void {
    /*this.catererService.delete(this.caterer.id).subscribe(() => {
      this.catererService.showMessage("Caterer successfully deleted!");
      this.router.navigate(["/caterers"]);
    });*/
  }

  cancel(): void {
    this.router.navigate(["/caterers"]);
  }
}
