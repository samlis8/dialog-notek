import {    
    Injector, 
    Injectable, 
    ComponentRef, 
    ApplicationRef,
    EmbeddedViewRef, 
    ComponentFactory, 
    ComponentFactoryResolver 
} from '@angular/core';  

import { DialogComponent } from './dialog.component';
import { DialogConfig, DialogAlertConfig, DialogPromptConfig } from './dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
    private componentRef: ComponentRef<DialogComponent>;

    constructor(private injector: Injector,
                private apRef: ApplicationRef,
                private resolver: ComponentFactoryResolver) {};

    private createComponent(options: any, isInsert: boolean): void {
        const FACTORY = this.resolver.resolveComponentFactory(DialogComponent);
        this.componentRef = FACTORY.create(this.injector);
        const DIALOG_NODE = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        for(let op in options) {
            this.componentRef.instance[op] = options[op];
        }

        if(!isInsert) {
            document.body.appendChild(DIALOG_NODE);
        }else {
            if(Array.from(document.body.children).pop().tagName === 'NOTEK-DIALOG') {
                document.body.removeChild(Array.from(document.body.children).pop());
            }
            document.body.appendChild(DIALOG_NODE);
        }

        // add angular dirty check.
        this.apRef.attachView(this.componentRef.hostView);
    };

    public close() {
        this.componentRef.instance.close();
    };

    public create(options?: DialogConfig, isInsert?: boolean): void {
        this.createComponent(options, isInsert);
    };

    public alert(title: string, options?: DialogAlertConfig, isInsert?: boolean): void {
        const defaultOptions = {
            type: 2,
            title: title
        };
        const os = Object.assign({}, options, defaultOptions);

        this.createComponent(os, isInsert);
    };

    public prompt(title: string, options?: DialogPromptConfig,  isInsert?: boolean): void {
        const defaultOptions = {
            type: 3,
            title: title
        };
        const os = Object.assign({}, options, defaultOptions);

        this.createComponent(os, isInsert);
    };
};
