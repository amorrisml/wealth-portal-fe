import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TextComponent,
    CheckboxComponent,
    TextareaComponent,

  ],
  exports: [
    TextComponent,
    CheckboxComponent,
    TextareaComponent,
  ],
  providers: []
})
export class FormComponentModule { }
