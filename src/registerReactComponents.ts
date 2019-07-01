import { IModule } from "angular";

import { ReactBridge } from "./bridge";
import { NameForm } from "./React/NameForm";
import { NameDisplay } from "./React/NameDisplay";
import { NameSet } from "./React/NameSet";

const componentsToRegister = [
  { name: "nameForm", component: NameForm },
  { name: "nameDisplay", component: NameDisplay },
  { name: "nameSet", component: NameSet }
];

export function registerReactComponents(ngModule: IModule) {
  componentsToRegister.forEach(({ name, component }) => {
    ngModule.directive(name, ReactBridge(component));
  });
}
