import {Pageable} from "./pageable.model";
import {Content} from "@angular/compiler/src/render3/r3_ast";
import {Sort} from "./sort.model";

export interface Data {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: any;
  empty: boolean;
}
