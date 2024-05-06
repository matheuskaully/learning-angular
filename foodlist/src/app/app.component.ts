import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './shared/food-list/food-list.component';
import { FoodAddComponent } from './shared/food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, FoodAddComponent, HttpClientModule, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodlist';
}
