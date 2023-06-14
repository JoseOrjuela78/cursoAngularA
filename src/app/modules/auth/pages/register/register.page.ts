import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneNumberValidator } from '../../validators/phonenumber.validator';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user.interface';


@Component({
  selector: 'app-home',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, PhoneNumberValidator()])
});



  constructor(
    public authSrv: AuthService
  ){

  }


  ngOnInit(): void {
    console.log(this.myForm)
    console.log(this.myForm.controls['email'].errors);
  }





saveUser(){
const user :IUser = {
  name: String(this.myForm.controls['name'].value),
  lastName: String(this.myForm.controls['lastName'].value),
  email: String(this.myForm.controls['email'].value),
  password: String(this.myForm.controls['password'].value),
  number: Number(this.myForm.controls['number'].value)
}


this.authSrv.saveUser(user);


}

}
