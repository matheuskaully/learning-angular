import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  // Jeito antigo

  // private list: Array<string> = [
  //   'Cachorro-quente',
  //   'Pastel de carne',
  //   'Caldo de cana',
  //   'Batata frita'
  // ]

  private urlAPI: string = 'http://localhost:3000' // ListFood API

  private list: Array<string> = [
    'Cachorro-quente',
    'Pastel de carne',
    'Caldo de cana',
    'Batata frita'
  ]

  constructor(private http: HttpClient) { }

  public emitEvent = new EventEmitter()
  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.urlAPI}/foodList`).pipe(
      response => response,
      error => error
    )
  }

  public foodListAdd(food: string) {
    this.foodListAlert(food)
    return this.list.push(food)
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }
}
