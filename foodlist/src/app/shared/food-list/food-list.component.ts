import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foodlist',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = []

  constructor(private foodListService: FoodListService) {

  }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList()
  }
}
