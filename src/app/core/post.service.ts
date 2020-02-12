import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  uploadImageFromEndPoint(imageString: string) {
    const url: __dirname + `${imageName}`;
    console.log(url);
  }
}
