import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
@Input() price:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
