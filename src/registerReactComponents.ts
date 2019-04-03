import { IModule } from "angular";

import { ReactBridge } from "./bridge";
import { ReactComponent } from "./ReactComponent";

const componentsToRegister = [
  { name: "reactComponent", component: ReactComponent }
];

export const registerReactComponents = (ngModule: IModule) => {
  componentsToRegister.forEach(({ name, component }) => {
    ngModule.directive(name, ReactBridge(component));
  });
};
