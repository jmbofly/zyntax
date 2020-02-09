import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
