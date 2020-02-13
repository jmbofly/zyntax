import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  uploadImageFromEndPoint(imageString: string) {
    const url = `${imageString}`;
    console.log(url);
  }
}
