import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, ViewChild } from '@angular/core';

import { dialogAnim1, dialogAnim2, dialogAnim3 } from './dialog.animations';

let errorTimer = null;

@Component({
    selector: 'notek-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.style.css'],
    animations: [ dialogAnim1, dialogAnim2, dialogAnim3 ]
})
export class DialogComponent {
    @Input() time: number;
    @Input() width: string;
    @Input() contentHeight: string;
    @Input() contentMaxHeight: string;
    @Input() title: string = '默认标题';
    @Input() content: any = '提示内容';
    @Input() timeFn: any;
    @Input() cancelFn: any;
    @Input() definiteFn: any;
    @Input() isBtns: boolean = true;
    @Input() isTitle: boolean = true;
    @Input() definiteBtnText: string = '确定';
    @Input() cancelBtnText: string = '取消';
    @Input() type: number = 1;
    @Input() icon: number;
    @Input() bgClickHide: boolean = false;
    @Input() isBg: boolean = true;
    @Input() animType: number = 1;
    @Input() place: string = '';
    @Input() preVal: string = '';
    @Input() isTextarea: boolean = false;
    @Input() preventCMCancel: boolean = true;
    @Input() createdFn: any;
    @Input() isCancelBtn: boolean = true;

    // type为3时可用.
    public enterCon: string;
    public isErrorIpt: boolean = false;

    private anim: string;
    private timer: any = null;
    public animState: boolean = true;
    public uuid: any = '1';

    @ViewChild('notekDialogInput') private input;

    constructor(private sanitizer: DomSanitizer) {};

    private ngOnInit(): void {
        // error handling.
        if(this.type === 3) {
            if(this.icon || this.contentHeight || this.contentMaxHeight || this.width || this.time || this.timeFn || this.content !== '提示内容') throw new TypeError('当type为3时不能存在「icon」、「contentHeight」、「contentMaxHeight」、「width」、「content」、「time」或「timeFn」参数');
        }
        if(this.type === 2) {
            if(/<[^>]+>/g.test(this.content)) throw new TypeError('「content」不能包含html标签');
            if(this.contentHeight || this.contentMaxHeight || this.width) throw new TypeError('当type为2时不能存在「contentHeight」、「contentMaxHeight」或「width」参数');
        }
        if(this.type === 1) {
            if(this.icon) throw new TypeError('当type为1时不能存在「icon」参数');
        }
        if(this.isBtns === false) {
            if(this.definiteBtnText !== '确定' || this.cancelBtnText !== '取消' || this.definiteFn || this.cancelFn) throw new TypeError('当isBtns为false时不能存在「definiteBtnText」、「cancelBtnText」、「definiteFn」或「cancelFn」参数');
        }
        if(this.isTitle === false) {
            if(this.title && this.title !== '默认标题') throw new TypeError('当isTitle为false时不能存在「title」参数');
        }

        if(this.type === 1) {
            this.content = this.sanitizer.bypassSecurityTrustHtml(this.content);
        }

        // timer.
        if(this.time) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.animState = false;
                this.timeFn && this.timeFn();
            }, this.time);
        }

        if(this.preVal) {
            this.enterCon = this.preVal;
        }

        // 处理id.
        if(sessionStorage.getItem('dialog_id')) {
            let id = +sessionStorage.getItem('dialog_id');
            this.uuid = ++id;
            sessionStorage.setItem('dialog_id', this.uuid + '');
        }else {
            sessionStorage.setItem('dialog_id', this.uuid);
        }
    };

    private ngAfterViewInit(): void {
        this.type === 3 && this.input.nativeElement.focus();

        this.createdFn && this.createdFn();
    };

    public close(): void {
        this.animState = false;
        this.cancelFn && this.cancelFn();
    };

    public definite(): void {
        if(this.type !== 3) {
            if(this.preventCMCancel) {
                this.animState = false;
            }
            this.definiteFn && this.definiteFn();
        }else {
            this.input.nativeElement.focus();
            if(!this.enterCon || /^\s*$/g.test(this.enterCon)) {
                this.isErrorIpt = true;
                clearTimeout(errorTimer);
                errorTimer = setTimeout(() => {
                    this.isErrorIpt = false;
                }, 3000);
                return;
            };
            this.animState = false;
            this.definiteFn && this.definiteFn(this.enterCon);
        }
    };

    public animEnd(evt: any): void {
        if(evt.toState === 'void' && !this.animState) {
            let dialog = document.querySelector(`#dialog_${this.uuid}`);
            document.body.removeChild(dialog.parentNode);
        }
    };

    public stopPropagation(evt: any): void {
        evt.stopPropagation();
    };
}

