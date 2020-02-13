import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Masthead } from 'src/app/interface/masthead';
import { Router, ActivatedRoute, NavigationExtras, NavigationStart } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, switchMap, scan, first, filter } from 'rxjs/operators';
import { home, about, contact } from '../../data/masthead';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Output() actionClicked = new EventEmitter<any>();
  isLoading$: BehaviorSubject<boolean>;
  title: string;
  subheading: string;
  background: string;
  navStart: Observable<NavigationStart>;
  image: string;
  constructor(public router: Router, public route: ActivatedRoute) {
    this.isLoading$ = new BehaviorSubject(false);
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.navStart.subscribe(e => {
      console.log(e);
      switch (e.url) {
        case '/about':
          this.setMastheadData(about);
          break;
        case '/contact':
          this.setMastheadData(contact);
          break;
        default:
          this.setMastheadData(home);
          break;
      }
    });
  }

  setMastheadData(section) {
    console.log(section);
    const masthead = document.getElementById('masthead');
    const overlay = document.getElementById('overlay')
    const data: Masthead = section['masthead'];
    this.title = data.title;
    this.subheading = data.subheading;
    this.background = data.background;
    this.image = data.image;
    masthead.style.background = `${data.background}`;
    overlay.style.background = `url(${data.image})`;
    overlay.style.backgroundSize = 'cover';
    overlay.style.backgroundPosition = 'center center';
  }

  async navigateTo(url: string, params?: NavigationExtras) {
    this.isLoading$.next(true);
    this.router.navigate([...url], { ...params })
      .then(res => this.isLoading$.next(false))
      .catch(err => console.log('ERROR!', err));
  }

}
