import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
/*     this.orderService.getOrders()
      .subscribe(orders => this.orders = orders); */
  }
  
}
