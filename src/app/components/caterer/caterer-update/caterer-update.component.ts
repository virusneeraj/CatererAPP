import { Router, ActivatedRoute } from "@angular/router";
import { CatererService } from "../service/caterer.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caterer-update",
  templateUrl: "./caterer-update.component.html",
  styleUrls: ["./caterer-update.component.css"],
})
export class CatererUpdateComponent implements OnInit {
  caterer: any;

  constructor(
    private catererService: CatererService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = +!this.route.snapshot.paramMap.get("id");

  }

  updateCaterer(): void {
    /*this.catererService.update(this.caterer).subscribe(() => {
      this.catererService.showMessage("Caterer updated successfully!");
      this.router.navigate(["/caterers"]);
    });*/
  }

  cancel(): void {
    this.router.navigate(["/caterers"]);
  }
}
