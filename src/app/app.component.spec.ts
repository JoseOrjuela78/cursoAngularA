import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';

describe('AppComponent', () => {

const text = 'Angular Curso';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe contener texto', () => {
      expect(text).toMatch(/Curso/);
  });

  it('no debe contener texto', () => {
    expect(text).not.toMatch(/react/);
});

it('comprobar tamaño', () => {
  expect(text).toHaveSize(13);
});

it('Mayor que', () => {

  expect(numbers(2,2)).toBeGreaterThanOrEqual(3);
});

it('Mayor que o igual', () => {

  expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
});

it('Menor que o igual', () => {

  expect(numbers(2,2)).toBeLessThanOrEqual(4);
});

it('Menor que o igual', () => {

  expect(numbers(2,2)).toBeLessThanOrEqual(4);
});

// ejercicio validar password

it('correcta', () => {
  const pass = 'Alfred1978';
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.validatePassword(pass)).toBeTruthy();
});

it('contiene solo digitos', () => {
  const pass = '197819';
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.validatePassword(pass)).toBeFalsy();
});

it('no contine Mayusculas', () => {
  const pass = 'alfre1978';
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.validatePassword(pass)).toBeFalsy();
});

it('no contiene digitos', () => {
  const pass = 'jhjlAAAA';
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.validatePassword(pass)).toBeFalsy();
});


it('dto 20%', () => {
  const code = 'SALE20';
  const price = 100;
  const pricedto = price * (1-0.2);
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.calculateDiscountPrice(price, code)).toBe(pricedto);
});

it('dto 30%', () => {
  const code = 'SALE30';
  const price = 100;
  const pricedto = price * (1-0.3);
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.calculateDiscountPrice(price, code)).toBe(pricedto);
});

it('dto 50%', () => {
  const code = 'SALE50';
  const price = 100;
  const pricedto = price * (1-0.5);
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.calculateDiscountPrice(price, code)).toBe(pricedto);
});


it('Deberia recibir info de la api', async()=>{

  const httpClientMock = new HttpClientMock();
  const userService = new UserService(httpClientMock as any);
  const user = await userService.getUser();
  expect(user).toEqual({id:1,name:'jose'})
})

  /*
  it(`should have as title 'cursoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cursoApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cursoApp app is running!');
  });

  */
});

export const numbers = (a:number,b: number) => a + b;
export class HttpClientMock{

  async  get(url:string):Promise<any>{
    const data = {id:1, name:'jose'}
    return {data}
  }

}
