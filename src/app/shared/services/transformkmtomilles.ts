import { Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class TransformKmToMilles{

  kilometros = 30;
  milles = 0;

  constructor(){
    this.convert();
  }


convert(){
  this.milles = this.kilometros * 0.621;
}


}
