import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'front-my-first-three';

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    
  }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle(): void {
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data.title) {
            return child.snapshot.data.title;
          }
          return appTitle;
        }),
      )
      .subscribe((newTitle: string) => {
        this.titleService.setTitle(`${newTitle} | MPT`);
      });
  }
}
