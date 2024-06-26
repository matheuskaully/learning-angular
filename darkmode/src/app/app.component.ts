import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeaderComponent],
  template: `
    <app-header />
    <router-outlet></router-outlet>
    <app-footer />
  `,
})
export class AppComponent {
  title = 'darkmode';


}
