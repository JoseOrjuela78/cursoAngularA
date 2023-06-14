import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces/characters.interface';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit{

  characters: Array<ICharacter> = [];

  constructor( public homeSvr: HomeService){}
  ngOnInit(): void {
    this.getPokemos()
  }

 async getPokemos(){
    try {

    const response = await  this.homeSvr.getPokemos();
    this.characters = response;


    } catch (error) {
      console.log(error);
    }
  }

}
