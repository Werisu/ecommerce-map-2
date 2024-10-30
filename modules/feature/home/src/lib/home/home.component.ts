import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RecommendedProductsService } from '@ecommerce-map-2/product-data-access';
import { ProductCardComponent } from '@ecommerce-map-2/product-ui';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = inject(RecommendedProductsService).getProducts();
}
