import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthService{

  user!: IUser;
  status:boolean = false;
  contadorObservable!:Observable<number>
  count = 0;

  init():void{
    this.contadorObservable = new Observable<number>((observer) => {


      const interval = setInterval(()=>{

         observer.next(this.count);
         this.count++
      },1000)

      return () =>{
        clearInterval(interval);
      }

    });
  }




  saveUser(user: IUser){
    this.user = user;
    console.log( this.user);
  }

  login(email:string, password:string):boolean{

    if(this.user.email == email && this.user.password == password  ){
      this.status = true;
      return true
    }else {
      this.status = false;
      return false
    }

  }

  loginPromise(email:string, password:string):Promise<boolean>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(email == 'jose'){
          resolve(true)
        }else{
          reject(false)
        }
      },5000)
    })
  }

}
