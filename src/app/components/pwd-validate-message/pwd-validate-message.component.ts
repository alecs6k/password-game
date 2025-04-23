import {Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'pwd-validate-message',
  templateUrl: './pwd-validate-message.component.html',
  styleUrls: ['./pwd-validate-message.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PwdValidateMessageComponent {

  @Input() public errorMessage: boolean;
  @Input() public ruleNumber!: number;
  @Input() public messageDescription!: string;

  constructor() {
    this.errorMessage = false;
  }
}
