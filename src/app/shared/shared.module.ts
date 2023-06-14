import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { PrefixPipe } from './pipes/prefix.pipe';
import { SeleccionarDirectiva } from './directivas/seleccionar.directive';
import { TitleCaseDirectiva } from './directivas/title-case-directive';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';





@NgModule({
  declarations: [
    PersonaComponent,
    PrefixPipe,
    SeleccionarDirectiva,
    TitleCaseDirectiva,
    MenuComponent,
    CharacterComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    PersonaComponent,
    PrefixPipe,
    SeleccionarDirectiva,
    TitleCaseDirectiva,
    MenuComponent,
    CharacterComponent
  ],
  providers: [
    TitleCasePipe

  ]
  //bootstrap: [AppComponent]
})
export class SharedModule { }
