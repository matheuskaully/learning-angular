import { FoodList } from '../../module/food-list';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'foodlist',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  public foodList: FoodList | any

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList()
    .subscribe(
      (response) => this.foodList = response,
      (error) => error
    )
    this.foodListService.emitEvent.subscribe(
      response => alert(`Você adicionou ${response}`)
    )
  }
}
