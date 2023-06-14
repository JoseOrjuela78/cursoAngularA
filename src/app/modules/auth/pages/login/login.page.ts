import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InfoService } from 'src/app/shared/services/info.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { TransformKmToMilles } from 'src/app/shared/services/transformkmtomilles';

@Component({
  selector: 'app-home',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit{

  name='';
  email:string = "";
  password :string = "";
  count = 0;

  constructor(
    public logger : LoggerService,
    public info : InfoService,
    public transf : TransformKmToMilles,
    public router: Router,
    public authSvr: AuthService
    ){}

  ngOnInit(): void {

    this.authSvr.init();
    const susbcripcion = this.authSvr.contadorObservable.subscribe((value)=>{
      this.count = value;

    })

    setTimeout(()=>{
      susbcripcion.unsubscribe()
      console.log('unsubscribe');
      /*const susb2 =  contadorObservable.subscribe((value)=>{
        console.log(value);
      })
*/
    },5000)

  }


  clickParent(nombre: string){

    this.logger.logFunction('click componente '+ this.info.names[1]);
  }

  sendRegister(){
    this.router.navigate(['/auth/register']);
  }

  login(){

    const result = this.authSvr.login(this.email, this.password);

    if (result){
      this.router.navigate(['/home']);
    }

  }


  async loginPromise(){

    try {
      const result = await this.authSvr.loginPromise(this.email, this.password);
      if (result){
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }


  }


}
