import angular from "angular";

import { AngularComponent } from "./AngularComponent";
import { registerReactComponents } from "./registerReactComponents";

const app = angular.module("app", []);
AngularComponent(app);
registerReactComponents(app);
