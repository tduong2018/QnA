
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor() { }

  ngOnInit() {
/*     this.orderService.getOrders()
      .subscribe(orders => this.orders = orders); */
  }
  posts:any[] = [2, 3, 1, 5]

  deletePost(post)
  {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
  
}
