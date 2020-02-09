import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn$: any;
  showMenu = false;
  constructor(public authService: AuthService, public modalService: NgbModal) {
    this.loggedIn$ = this.authService.loggedIn$;
  }

  ngOnInit() {
  }

  openAuthModal(content: ElementRef<any>) {
    const modalRef = this.modalService.open(content);
  }

  async signOut() {
    return this.authService.signOut().then(() => console.log('signed out')).catch(err => console.log('Error signing out'));
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


}
