import { CatererService } from "../service/caterer.service";
import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {Caterer} from "../model/caterer/caterer.content.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../util/my-error-etate-matcher";
import {environment} from "../../../../environments/environment";
import {Location} from "@angular/common";

@Component({
  selector: "app-caterer-create",
  templateUrl: "./caterer-create.component.html",
  styleUrls: ["./caterer-create.component.css"],
})
export class CatererCreateComponent implements OnInit {
   caterer = {} as Caterer;
   catererForm: FormGroup | any;
  saveInProgress: boolean = false;
  matcher = new MyErrorStateMatcher();
  errors: string[] = [];

  constructor(private catererService: CatererService, private location: Location, private router: Router, public formBuilder: FormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.buildCatererForm();
  }

  /* Reactive form */
  buildCatererForm() {
    this.catererForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      capacity: this.formBuilder.group({
        maximum: ['0', [Validators.required]],
        minimum: ['0', [Validators.required]]
      }),
      contact: this.formBuilder.group({
        emailAddress: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.pattern("(^$|[0-9]{10})")]],
        phoneNumber: ''
      }),
      location: this.formBuilder.group({
        city:['',[Validators.pattern("^[A-Za-z ]*$")]],
        street: ['', Validators.required],
        postalCode: ''
      })
    });
  }

  createCaterer(): void {
   // console.log(this.catererForm.value);
    if(this.catererForm.valid){
      this.saveInProgress = true;
      this.catererService.create(this.catererForm.value).subscribe( response => {
        //console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
        if(environment.api_success_status.includes(response.status)){
          this.catererService.showMessage("Caterer created!");
          this.router.navigate(['caterers','detail',response.data?.id]);
        } else {
          this.catererService.showMessage("Could not crate: "+ response.data, true);
        }
       // console.log('asghdfhgcjdsh')
        this.saveInProgress = false;

      }, err => {
        this.catererService.showMessage("Could not crate: "+ err.error?.data, true);
        this.errors = err.error?.data;
        this.saveInProgress = false;
      });
    }
    /*this.catererService.create(this.caterer).subscribe(() => {
      this.catererService.showMessage("Caterer created!");
      this.router.navigate(["/caterers"]);
    });*/
    // this.catererForm.
  }

  cancel(): void {
    this.location.back();
  }

  rest() {
    //this.catererForm.rest();
    //this.catererForm.resetForm();
  }
}
