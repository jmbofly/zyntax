import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn$: Observable<boolean>;
  constructor(private afAuth: AngularFireAuth) {
    this.loggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}
