import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @ViewChild("md")
  md: ModalDialogComponent;

  //instance data members
  products = [{ name: 'coke', price: 40, quantity: 0 },
  { name: 'pepsi', price: 40, quantity: 0 },
  { name: 'limca', price: 30, quantity: 0 },
  { name: 'Mirinda', price: 20, quantity: 0 }];

  selectedProduct = null;
  
  //instance method
  confirmdelete(product) {
    this.selectedProduct = product;
    this.md.show();
  }

  delete(){
    var index = this.products.indexOf(this.selectedProduct);
    this.products.splice(index, 1);
  }

  cancel() {
    this.selectedProduct = null;
  }

  decrement(product) {
    if (product.quantity > 0)
      product.quantity--;
  }

  increment(product) {
    product.quantity++;
  }

  add() {
    this.products.push({ name: "", price: 0, quantity: 0 });
  }
}
