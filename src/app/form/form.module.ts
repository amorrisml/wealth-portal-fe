import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        TextComponent,
        CheckboxComponent
       
    ],
    exports: [
        TextComponent,
        CheckboxComponent
    ],
    providers: [ ]
})
export class FormComponentModule {}