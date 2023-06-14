import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICharacter, IResultsCharacters } from "../interfaces/characters.interface";

@Injectable({
  providedIn:'root'
})
export class HomeService{

constructor(
  public http: HttpClient
){}

getPokemos():Promise<Array<ICharacter>>{
  const url = 'https://rickandmortyapi.com/api/character/?page=1';
  return new Promise((resolve, reject)=>{

    this.http.get<IResultsCharacters>(url).subscribe((response)=>{

      resolve(response.results);
    },(error)=>{
      reject(error)
    })


  })
}

}
