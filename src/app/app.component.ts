import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { filter, map, first, tap } from 'rxjs/operators';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute, private data: DataService) {
  }
  ngOnInit() {
  }


}

