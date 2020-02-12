import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/database';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public db: AngularFireDatabase) {

  }
}
