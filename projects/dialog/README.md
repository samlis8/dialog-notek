### dialog-notek angular4+ 弹窗组件

##### 安装
`npm install dialog-notek -D`

##### 使用
```
// app.module.ts
import { DialogModule } from 'dialog-notek';
@NgModule({
    declarations: [...],
    imports: [
        DialogModule.forRoot()
    ],
    providers: [],
    bootstrap: [...]
})

// component.
import { DialogService } from 'dialog-notek';

export class YourComponent {
    constructor(private dialogSrv: DialogService) { };

    test() {
        this.dialogSrv.create({
            title: '我是弹窗组件',
            content: '我是弹窗组件的内容'
        });
    };
}

```

##### 支持
```
**类型**
混合类型: dialog.create(params)
提示类型: dialog.alert('标题', params)
用户交互类型: dialog.prompt('标题', params)

**参数**
dialog.create:
    title?: string;           // 标题.
    content?: string;         // 内容 支持html(仅在type为1的时候支持).
    width?: string;           // 宽度.
    contentHeight?: string;   // 内容固定高度.
    contentMaxHeight?: string;// 内容最大高度.
    definiteFn?: any;         // 确定按钮回调.
    cancelFn?: any;           // 取消按钮回调.
    time?: number;            // 定时关闭 ms.
    timeFn?: any;             // 定时关闭回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    cancelBtnText?: string;   // 取消按钮文本 默认「取消」.
    isBtns?: boolean;         // 是否显示按钮 默认显示.  
    isTitle?: boolean;        // 是否显示标题 默认显示.  
    type?: number;            // 弹出层类型 1 通用 2 提示 3 输入交互.
    icon?: number;            // 图标类型 1 成功 2 失败 3 警告 只能在type等于2时使用.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
    animType?: number;        // 动画类型 1 跳动(默认) 2 从上到下 3 抖动.
    place?: string;           // 输入框placeholder文本 只能在type等于3时使用.
    preVal?: string;          // 输入框预置内容 只能在type等于3时使用.
    isTextarea?: boolean;      // 当type为3时 输入框是否呈现为textarea 默认呈现input.
    preventCMCancel?: boolean; // 点击确定按钮的时候是否阻止组件消失 默认true.
    createdFn?: any;           // 创建组件完成的回调.
    isCancelBtn?: boolean;   // 是否显示取消按钮.

dialog.alert:
    content?: string;         // 内容 不支持html.
    time?: number;            // 定时关闭 ms.
    timeFn?: any;             // 定时关闭回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    definiteFn?: any;         // 确定按钮回调.
    icon?: number;            // 图标类型 1 成功 2 失败 3 警告 只能在type等于2时使用.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
    animType?: number;        // 动画类型 1 跳动(默认) 2 从上到下 3 抖动.

dialog.prompt:
    definiteFn?: any;         // 确定按钮回调.
    cancelFn?: any;           // 取消按钮回调.
    definiteBtnText?: string; // 确定按钮文本 默认「确定」.
    cancelBtnText?: string;   // 取消按钮文本 默认「取消」.
    bgClickHide?: boolean;    // 点击页面其他地方是否允许关闭 默认不关闭.
    isBg?: boolean;           // 是否需要遮照背景 默认需要.
    place?: string;           // 输入框placeholder文本 只能在type等于3时使用.
    preVal?: string;          // 输入框预置内容 只能在type等于3时使用.
    isTextarea?: boolean;     // 输入框是否呈现为textarea 默认呈现input.
    animType?: number;        // 动画类型 1 跳动(默认) 2 从上到下 3 抖动.
```

##### 提示
组件默认提供了`alert`和`prompt`两个快捷方法，用于快速使用。
除此之外，你还可以使用最强大的`create`方法来模拟所有的场景。
`create`方法的所有参数请参考上面的支持部分。











