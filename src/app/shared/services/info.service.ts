import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class InfoService{

names = ['Paula','Diana','Andrea'];

personas = [
  {name:'Manuel', type:'estudiante', active: true},
  {name:'Jose', type:'maestro', active: false},
  {name:'Andres', type:'directivo', active: true}
]

}
