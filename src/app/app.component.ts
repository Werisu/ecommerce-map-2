import { Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-map-2/layout';
import { ProductSearchComponent } from '@ecommerce-map-2/product-search';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-map-2';
}
