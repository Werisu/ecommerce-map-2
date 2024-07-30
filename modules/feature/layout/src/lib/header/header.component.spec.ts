import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

// Mentoria Angular Pro
// Por que testar o nosso código?
// Garantir que o sistema funcione como deveria
// Serve como documentação
// Ajuda a criar componentes mais coesos (qualidade de código)
// Confiança para alterar ou refatorar o código

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe('Ecommerce');
  });
});
