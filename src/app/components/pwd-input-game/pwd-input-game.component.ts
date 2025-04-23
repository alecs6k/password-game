import {Component} from '@angular/core';
import {PasswordRule} from "../../interfaces/password.rule.interface";
import {rulesList} from "../../constants/password-rule-list";

@Component({
  selector: 'pwd-input-game',
  templateUrl: './pwd-input-game.component.html',
  styleUrls: ['./pwd-input-game.component.css']
})
export class PwdInputGameComponent {

  public password: string;
  public currentRules: PasswordRule[];
  public maxRulePassed: number;
  public validRules: PasswordRule[];
  public errorRules: PasswordRule[];

  constructor() {
    this.password = '';
    this.maxRulePassed = 1;
    this.currentRules = rulesList;
    this.validRules = [];
    this.errorRules = [];
  }

  public onPasswordChange(newValue: string): void {
    this.validRules = [];
    this.errorRules = [];
    for (let rule of this.currentRules) {
      if (rule.rule > this.maxRulePassed) {
        break;
      }
      const validateCurrentPassword: boolean = rule.validatePassword(newValue);
      (validateCurrentPassword ? this.validRules : this.errorRules).push(rule);
      this.validRules.sort((a, b) => b.rule - a.rule);
      this.errorRules.sort((a, b) => b.rule - a.rule);
      if (validateCurrentPassword && rule.rule === this.maxRulePassed) {
        this.maxRulePassed++;
      }
    }
  }
}
