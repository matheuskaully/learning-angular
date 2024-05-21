// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = false;
  
  constructor() {
    this.darkTheme = localStorage.getItem('darkTheme') === 'true';
    this.updateTheme();
  }

  isDarkTheme() {
    return this.darkTheme;
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem('darkTheme', this.darkTheme.toString());
    this.updateTheme();
  }

  private updateTheme() {
    const htmlElement = document.documentElement;
    if (this.darkTheme) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }
}
