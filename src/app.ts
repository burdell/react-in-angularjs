import { IComponentOptions, IModule, IScope } from "angular";

import { PersonService as PService, PersonService } from "./PersonService";

const component: IComponentOptions = {
  controller: class MyAppCtrl {
    private name: string;
    private email: string;
    private $scope: IScope;
    private person: PersonService;

    constructor($scope: IScope, PersonService: PService) {
      this.$scope = $scope;
      this.person = PersonService;

      const { name, email } = this.person.getPerson();
      this.name = name;
      this.email = email;

      this.person.subscribe(() => {
        this.setAngularInfo();
      });
    }

    setAngularInfo = () => {
      this.$scope.$evalAsync(() => {
        const { name, email } = this.person.getPerson();
        this.name = name;
        this.email = email;
      });
    };

    setInfo = (person: { name: string; email: string }) => {
      this.person.setPersonInfo(person);
    };
  },

  template: `
    <div>
      <div style="border:2px solid red; padding:0.5rem; margin: 5px 0">
        <angular-form></angular-form>
      </div>
      <div style="border:2px solid red; padding:0.5rem; margin: 5px 0">
        <angular-display email="$ctrl.email" name="$ctrl.name"></angular-display>
      </div>
      <div style="border:2px solid blue; padding:0.5rem; margin: 5px 0">
        <name-form on-change="$ctrl.setInfo"</name-form>
      </div>
      <div style="border:2px solid blue; padding:0.5rem; margin: 5px 0">
        <name-display></name-display>
      </div>
      <div style="border:2px solid blue; padding:0.5rem; margin: 5px 0">      
        <name-set></name-set>
      </div>
    </div>
  `
};

export const registerAngularApp = (ngModule: IModule) => {
  ngModule.component("angularComponent", component).name;
};
