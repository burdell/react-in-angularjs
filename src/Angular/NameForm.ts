import { IComponentOptions, IModule, IScope } from "angular";
import { PersonService } from "../PersonService";

const component: IComponentOptions = {
  controller: class FormController {
    private person: PersonService;
    private name: string;
    private email: string;

    constructor(PersonService: PersonService) {
      this.person = PersonService;
      this.name = "";
      this.email = "";
    }

    public setName() {
      const { email } = this.person.getPerson();
      this.person.setPersonInfo({ email, name: this.name });
    }

    public setEmail() {
      const { name } = this.person.getPerson();
      this.person.setPersonInfo({ email: this.email, name });
    }
  },
  template: `
      <div>
        <div>
          <label>Name</label>
          <input placeholder="Name" ng-change="$ctrl.setName()" ng-model="$ctrl.name" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder="Email" ng-change="$ctrl.setEmail()" ng-model="$ctrl.email" />
        </div>
      </div>
  `
};

export const registerNameForm = (ngModule: IModule) => {
  ngModule.component("angularForm", component).name;
};
