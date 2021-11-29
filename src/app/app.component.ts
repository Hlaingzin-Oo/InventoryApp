import { Component } from '@angular/core';

import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product: Product[];
  constructor() {
    this.product = [
      new Product(
        "Coffee",
        "Americano",
        "assets/images/products/Americano.jfif",
        ["Market Place", "Kitchen"], 10
      ),

      new Product(

        "Coffee",
        "Black",
        "assets/images/products/Black.jfif",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Capuccino",
        "assets/images/products/Capuccino.jfif",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Cortado",
        "assets/images/products/Cortado.jfif",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Delcona",
        "assets/images/products/Delcona.jfif",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Doppio",
        "assets/images/products/Doppio.jfif",
        ["Market Place", "Kitchen"], 10
      ),

      new Product(

        "Coffee",
        "Americano",
        "assets/images/products/Espresso.jfif",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Galao",
        "assets/images/products/Galao.jpg",
        ["Market Place", "Kitchen"], 10
      ),
      new Product(

        "Coffee",
        "Latte",
        "assets/images/products/Latte.jfif",
        ["Market Place", "Kitchen"], 10
      )
    ]
  }
}
