import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { ElementsModule } from './elements/elements.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ElementsModule,
    HomeModule,
    SharedModule,
    PostsModule,
    ContactModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
