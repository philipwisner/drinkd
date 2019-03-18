import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Macchiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];
  coffeeOrder = [];
  orderNumber = 1;

  //need to check order number on reload and get most recent order number
  //reset order number after each day
  //

  ngOnInit() {}

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    this.ordersService.form.value.orderNumber = this.orderNumber;
    let data = this.ordersService.form.value;
    console.log('data inside onSubmit is', data);
    this.orderNumber++;

    this.ordersService.createCoffeeOrder(data)
      .then(res => {
        console.log('res is after submit', res);
        /*do something here....
        maybe clear the form or give a success message*/
      });
  }
}
