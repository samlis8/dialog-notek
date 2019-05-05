import { trigger, transition, animate, style, query, group, state, keyframes, AnimationTriggerMetadata } from '@angular/animations';

export const dialogAnim1: AnimationTriggerMetadata = trigger('dialogAnim1', [
    transition(':enter', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 0, transform: 'scale(.5)'}),
            style({opacity: .2, transform: 'scale(.8)'}),
            style({opacity: .5, transform: 'scale(1.1)'}),
            style({opacity: 1, transform: 'scale(1)'})
        ]))
    ]),
    transition(':leave', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 1, transform: 'scale(1)'}),
            style({opacity: .5, transform: 'scale(1.1)'}),
            style({opacity: .1, transform: 'scale(.8)'}),
            style({opacity: 0, transform: 'scale(.5)'})
        ]))
    ])
]);

export const dialogAnim2: AnimationTriggerMetadata = trigger('dialogAnim2', [
    transition(':enter', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 0, position: 'absolute', top: '30%' }),
            style({opacity: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)'})
        ]))
    ]),
    transition(':leave', [
        animate('.3s ease-in-out', keyframes([
            style({opacity: 1, position: 'absolute', top: '50%', transform: 'translateY(-50%)'}),
            style({opacity: 0, position: 'absolute', top: '30%'})
        ]))
    ])
]);

export const dialogAnim3: AnimationTriggerMetadata = trigger('dialogAnim3', [
    transition(':enter', [
        animate('.3s ease-out', keyframes([
            style({opacity: 0, transform: 'rotate(12deg)'}),
            style({opacity: .1, transform: 'rotate(-12deg)'}),
            style({opacity: .2, transform: 'rotate(10deg)'}),
            style({opacity: .3, transform: 'rotate(-10deg)'}),
            style({opacity: .4, transform: 'rotate(8deg)'}),
            style({opacity: .5, transform: 'rotate(-8deg)'}),
            style({opacity: .6, transform: 'rotate(6deg)'}),
            style({opacity: .7, transform: 'rotate(-6deg)'}),
            style({opacity: .8, transform: 'rotate(4deg)'}),
            style({opacity: .9, transform: 'rotate(-4deg)'}),
            style({opacity: 1, transform: 'rotate(-2deg)'})
        ]))
    ]),
    transition(':leave', [
        animate('.3s ease-in', keyframes([
            style({opacity: 1, transform: 'scale(1)'}),
            style({opacity: 0, transform: 'scale(.5)'}),
        ]))
    ])
]);