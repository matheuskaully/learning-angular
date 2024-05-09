
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      response => console.log(response)
    )

    this.activatedRoute.queryParams.subscribe(
      response => console.log(response)
    )

    setInterval(() => {
      this.route.navigate(['404'])
      // this.route.navigateByUrl('404')
    }, 5000)
  }
}
