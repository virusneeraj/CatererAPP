import {Link} from "../pagination/link.model";

export interface Location{
  city?: string;
  street?: string;
  postalCode?: string;
  links?: Link[];
}
