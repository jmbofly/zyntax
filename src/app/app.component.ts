import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zyntax';

  ngOnInit() { }
  printUser(event) {
    console.log('user', event)
  }
  printError(event) {
    console.log('user error', event)
  }

}

