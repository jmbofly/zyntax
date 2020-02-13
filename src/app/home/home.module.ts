import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { PostsModule } from '../posts/posts.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    PostsModule
  ]
})
export class HomeModule { }
