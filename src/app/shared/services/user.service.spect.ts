import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {

let service: UserService;

beforeEach(()=> {TestBed.configureTestingModule({

providers:[UserService],
imports:[HttpClientModule]

 });

 service = TestBed.get(UserService);

});

it('Should be created',()=>{

  expect(service).toBeTruthy();
});







}

