import { TitleCasePipe } from "@angular/common";
import { Directive , HostListener} from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector:'[appTitleCase]'
})
export class TitleCaseDirectiva{

  constructor(
    public ngControl: NgControl,
    public titlecase: TitleCasePipe
  ){}

  @HostListener('ngModelChange', ['$event'])
  onInputChange(value:string){
    const titlecaseSrt = this.titlecase.transform(value)
    this.ngControl.valueAccessor?.writeValue(titlecaseSrt)
  }



}
