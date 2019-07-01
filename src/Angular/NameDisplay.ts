import { IComponentOptions, IModule, IScope } from "angular";

const component: IComponentOptions = {
  bindings: {
    name: "<",
    email: "<"
  },
  template: `
      <div>
        <div>Name: {{$ctrl.name}}</div>
        <div>Email: {{ $ctrl.email }}</div>
      </div>
  `
};

export const registerAngularDisplay = (ngModule: IModule) => {
  ngModule.component("angularDisplay", component).name;
};
