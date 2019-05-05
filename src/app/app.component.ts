import { Component } from '@angular/core';
import { DialogService } from 'dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'ng-test';

    constructor(private dialogSrv: DialogService) { };

    test() {
        this.dialogSrv.create({
            icon: 1,
            type: 2,
            animType: 2,
            // time: 3000,
            isBtns: false,
            // isTitle: false,
            content: '我是内容',
        });
    };

    test1() {
        this.dialogSrv.create({
            icon: 2,
            type: 2,
            animType: 3,
            // time: 3000,
            isBtns: false,
            // isTitle: false,
            content: '我是内容',
        });
    };
}
