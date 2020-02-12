import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MastheadComponent],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent, MastheadComponent],
  entryComponents: [HeaderComponent, FooterComponent, MastheadComponent]
})
export class ElementsModule { }
