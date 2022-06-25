import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable, EMPTY, throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";
import {SortOrder} from "../model/pagination/sort-order.enum";
import {environment} from "../../../../environments/environment";
import {Response} from "../model/response.model";
import {Caterer} from "../model/caterer/caterer.content.model";

@Injectable({
  providedIn: "root",
})
export class CatererService {
  private create_api = environment.api_caterer_create;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(caterer: Caterer): Observable<Response> {
    return this.http.post<Response>(this.create_api, caterer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getCaterer(page: number, size: number, sort: string, order:SortOrder): Observable<Response> {
    const url = environment.api_url(page,size,sort,order.toString());
    return this.http.get<Response>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Response> {
    const url = environment.api_caterer_detail(id);
    return this.http.get<Response>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  /*update(caterer: Caterer): Observable<Caterer> {
    const url = `${this.baseUrl}/${caterer.id}`;
    return this.http.put<Caterer>(url, caterer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }*/

  delete(id: number) {
    /*const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Caterer>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );*/
  }

  errorHandler(e: any): Observable<any> {
    console.log('error', e)
    this.showMessage("An error has occurred!", true);
    return throwError(e);
    //return EMPTY;
  }
}
