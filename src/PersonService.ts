import { IModule } from "angular";
import { configureStore, createAction, createReducer } from "redux-starter-kit";

export interface Person {
  name: string;
  email: string;
}

const newPerson = (): Person => ({
  name: "",
  email: ""
});

export const setPersonInfo = createAction<Person>("setPersonInfo");

const personReduer = createReducer(newPerson(), {
  [setPersonInfo.type]: (state, action) => {
    const { email, name } = action.payload;
    state.email = email;
    state.name = name;
  }
});

export class PersonService {
  private store: any = configureStore({ reducer: personReduer });

  setPersonInfo = (person: Person) => {
    this.store.dispatch(setPersonInfo(person));
  };

  public getPerson() {
    return this.store.getState();
  }

  public subscribe(callback: () => void) {
    return this.store.subscribe(callback);
  }

  public getStore() {
    return this.store;
  }
}

export function registerPersonService(module: IModule) {
  module.service("PersonService", PersonService);
}
