import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxEditorModule
  ],
  exports: [CommonModule, FormsModule, NgxEditorModule],
})
export class SharedModule { }
