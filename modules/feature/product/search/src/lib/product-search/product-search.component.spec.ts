import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  mockProducts,
  ProductSearchService,
} from '@ecommerce-map-2/product-data-access';
import { of } from 'rxjs';
import { ProductSearchComponent } from './product-search.component';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        // SOLID - D - Dependency Inversion Principle | defende que nossos módulos de alto nível devem depender de abstrações e não de classes concretas.
        {
          provide: ProductSearchService,
          useValue: { searchByName: () => of(mockProducts) },
        },
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    // Arrange
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    // Act
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    // Assert
    expect(productSearchService.searchByName).not.toHaveBeenCalled();

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    // Arrange
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    // Act
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'notebook';
    input.dispatchEvent(new Event('input'));

    tick(500);

    // Assert
    expect(productSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));
  it('should prevent identical submissions', fakeAsync(() => {
    // Arrange
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    // Act
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    tick(500);
    input.value = 'tv';
    input.dispatchEvent(new Event('input'));
    tick(500);
    // Assert
    expect(productSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));
  it('should prevent empty submissions', fakeAsync(() => {
    // Arrange
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    // Act
    input.value = '';
    input.dispatchEvent(new Event('input'));
    tick(500);
    // Assert
    expect(productSearchService.searchByName).not.toHaveBeenCalled();
  }));
  it('should return products observable correctly', () => {
    component.products$.subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });
  });
});
