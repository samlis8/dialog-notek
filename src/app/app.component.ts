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
            icon: 3,
            type: 2,
            animType: 2,
            time: 3000,
            isBtns: false,
            title: '警告警告！',
            content: '检测到入侵者！！！'
        });
    };

    test1() {
        this.dialogSrv.create({
            type: 2,
            icon: 1,
            time: 3000,
            animType: 3,
            isBtns: false,
            isTitle: false,
            content: '恭喜，你中奖了',
            bgClickHide: true
        });
    };
}
