import {Caterer} from "./caterer/caterer.content.model";
import {Data} from "./pagination/data.model";


export interface Response {
  status: string;
  message: string;
  data: Data | Caterer | string | any;
}
