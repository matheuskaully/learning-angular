import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private list: Array<string> = [
    'Cachorro-quente',
    'Pastel de carne',
    'Caldo de cana',
    'Batata frita'
  ]
  constructor() { }

  public foodList() {
    return this.list
  }

  public foodListAdd(food: string) {
    return this.list.push(food)
  }
}
