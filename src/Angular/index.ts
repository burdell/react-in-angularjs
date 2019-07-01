import { IModule } from "angular";

import { registerAngularDisplay } from "./NameDisplay";
import { registerNameForm } from "./NameForm";

export function registerAngularComponents(module: IModule) {
  registerAngularDisplay(module);
  registerNameForm(module);
}
