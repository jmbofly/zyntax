import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ChangeDetectorRef
}

  from '@angular/core';

import {
  Router,
  ActivatedRoute,
  NavigationExtras
}

  from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {
  AuthService
}

  from '../../core/auth.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}

) export class HeaderComponent implements OnInit {
  loggedIn$: any;
  showMenu = false;

  isLoading$: BehaviorSubject<boolean>;
  modalRef: BsModalRef;
  modalConfig = {
    animated: true
  };

  constructor(public router: Router, public route: ActivatedRoute, public authService: AuthService, public modalService: BsModalService, private changeDetection: ChangeDetectorRef) {
    this.loggedIn$ = this.authService.loggedIn$;
    this.isLoading$ = new BehaviorSubject(false);
  }

  ngOnInit() {
    this.loader();
  }

  navigateTo(url: string, params?: NavigationExtras) {
    this.loader({ url, params });
  }

  openAuthModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
    this.modalService.onHide.subscribe(results => console.log('modal results', results))
  }

  async signOut() {
    return this.authService.signOut().then(() => console.log('signed out')).catch(err => console.log('Error signing out'));
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  loader(navData?: { url: string, params?: NavigationExtras }) {
    this.isLoading$.next(true);
    if (!navData) {
      setTimeout(() => this.isLoading$.next(false), 2000);
    } else {
      this.router.navigate([navData.url], {
        relativeTo: this.route,
        ...navData.params
      }
      ).then(res => setTimeout(() => this.isLoading$.next(false), 1500))
    }
  }


}