import angular from "angular";

import { registerAngularApp } from "./app";
import { registerReactComponents } from "./registerReactComponents";
import { registerPersonService } from "./PersonService";
import { registerAngularComponents } from "./Angular";

const app = angular.module("app", []);

registerAngularApp(app);
registerAngularComponents(app);
registerReactComponents(app);
registerPersonService(app);
