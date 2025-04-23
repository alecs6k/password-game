import {NgModule} from "@angular/core";
import {PwdInputGameComponent} from "./pwd-input-game.component";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {PwdValidateMessageModule} from "../pwd-validate-message/pwd-validate-message.module";

@NgModule({
  declarations: [PwdInputGameComponent],
  imports: [CommonModule, MatInputModule, FormsModule, PwdValidateMessageModule],
  exports: [PwdInputGameComponent]
})
export class PwdInputGameModule {}
