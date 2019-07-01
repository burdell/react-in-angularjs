import React from "react";
import ReactDOM from "react-dom";
import { IAttributes } from "angular";
import { Provider } from "react-redux";

export const ReactBridge = (
  component: any,
  Providers?: (props: { children: any }) => JSX.Element
) => {
  return () => {
    return {
      restrict: "E",
      replace: true,
      link: (scope: any, element: any, attrs: IAttributes) => {
        let props = {};
        const wantedProps = Object.keys(attrs.$attr);
        if (wantedProps.length) {
          props = wantedProps.reduce((acc: any, prop: string) => {
            acc[prop] = scope.$eval(attrs[prop]);
            return acc;
          }, {});
        }
        const reactComponent = (
          <Provider store={scope.personStore}>
            {React.createElement(component, props)}
          </Provider>
        );
        ReactDOM.render(reactComponent, element[0]);
        scope.$on("$destroy", () =>
          ReactDOM.unmountComponentAtNode(element[0])
        );
      },
      controller: class BridgeController {
        constructor($scope: any, PersonService: any) {
          $scope.personStore = PersonService.getStore();
        }
      }
    };
  };
};
