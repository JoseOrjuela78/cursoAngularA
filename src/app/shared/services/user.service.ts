import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class UserService{

  constructor(public http: HttpClient){

  }


  async getUser(){
    const response: any = await this.http.get('http://jsonplaceholder.typicode.com/users')
    return response.data
  }


}
