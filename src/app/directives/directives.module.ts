import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalBodyDirective } from './modal-body.directive';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
       ModalBodyDirective
    ],
    exports: [
        ModalBodyDirective
    ],
    providers: [ ]
})
export class DirectiveComponentModule {}