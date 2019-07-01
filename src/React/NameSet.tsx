import React from "react";
import { connect } from "react-redux";

import { Person, setPersonInfo } from "../PersonService";

function NameSetComponent({ setGeorgePBurdell }: any) {
  return <button onClick={setGeorgePBurdell}>Set George P. Burdell</button>;
}

function mapDispatchToProps(dispatch: any) {
  return {
    setGeorgePBurdell: () =>
      dispatch(
        setPersonInfo({
          name: "George P Burdell",
          email: "gpburdell@gmail.com"
        })
      )
  };
}

export const NameSet = connect(
  (person: Person) => person,
  mapDispatchToProps
)(NameSetComponent);
