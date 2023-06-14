import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PhoneNumberValidator():ValidatorFn{

  return (control: AbstractControl): ValidationErrors =>{
    const phonenumber = control.value
    let phone618invalid = false;
    let phone777invalid = false;

    if(!phonenumber.toString().includes('618')){
      phone618invalid = true;
      };

    if(!phonenumber.toString().includes('777')){
      phone777invalid = true;
    }
if(phone618invalid && phone777invalid){
  return {phone618invalid , phone777invalid}
} else {
  return {}
}


  }



}
