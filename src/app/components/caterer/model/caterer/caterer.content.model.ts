import {Capacity} from "./capacity.model";
import {Location} from "./location.model";
import {Contact} from "./contact.model";
import {Link} from "../pagination/link.model";

export interface Caterer {
  id: number | string;
  name: string;
  location?: Location;
  capacity?: Capacity;
  contact?: Contact;
  links?: Link[];
}
