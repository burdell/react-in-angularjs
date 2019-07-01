import React from "react";
import { connect } from "react-redux";

import { Person } from "../PersonService";

function NameDisplayComponent({ name, email }: Person) {
  return (
    <>
      <div>Name: {name} </div>
      <div>Email: {email} </div>
    </>
  );
}

export const NameDisplay = connect((person: Person) => person)(
  NameDisplayComponent
);
