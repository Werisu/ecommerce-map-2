import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

// Mentoria Angular Pro
// Por que testar o nosso código?
// Garantir que o sistema funcione como deveria
// Serve como documentação
// Ajuda a criar componentes mais coesos (qualidade de código)
// Confiança para alterar ou refatorar o código

const mockTitle = 'Ecommerce';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe(mockTitle);

    component.title = 'Ecommerce';
    fixture.detectChanges();
    expect(header.textContent).toBe('Ecommerce');
  });

  it('should redirect to "/" when title is is clicked', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
