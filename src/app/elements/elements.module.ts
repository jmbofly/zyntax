import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent],
  entryComponents: [HeaderComponent, FooterComponent]
})
export class ElementsModule { }
