import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }
  coffeeOrders;

  ngOnInit() {
    this.getCoffeeOrders();
  }

  //need to reverse coffee order list so newest is on top
  //this also needs to update whenever changes are made
  getCoffeeOrders = () => this.ordersService.getCoffeeOrders()
    .subscribe(res => (
      this.coffeeOrders = res
    ));

  markCompleted = data => this.ordersService.updateCoffeeOrder(data);

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);
}
