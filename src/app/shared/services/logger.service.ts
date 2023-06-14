import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class LoggerService{

logFunction(msg:string, type='debug'){

  if(type =='debug'){
    console.log(msg);
  }
}

}
