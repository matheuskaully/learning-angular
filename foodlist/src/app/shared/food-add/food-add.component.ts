import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food-add',
  standalone: true,
  imports: [],
  templateUrl: './food-add.component.html',
  styleUrl: './food-add.component.scss'
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) {

  }

  ngOnInit(): void {

  }

  public foodListAdditem(food: string) {
    this.foodListService.foodListAdd(food)
  }
}
