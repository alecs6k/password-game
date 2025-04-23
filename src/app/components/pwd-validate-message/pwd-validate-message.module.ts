import {NgModule} from "@angular/core";
import {PwdValidateMessageComponent} from "./pwd-validate-message.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [PwdValidateMessageComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [PwdValidateMessageComponent]
})
export class PwdValidateMessageModule {}
