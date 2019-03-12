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

  ngOnInit() {}

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;
    console.log('data inside onSubmit is', data);

    this.ordersService.createCoffeeOrder(data)
      .then(res => {
        console.log('res is after submit', res);
        /*do something here....
        maybe clear the form or give a success message*/
      });
  }
}
