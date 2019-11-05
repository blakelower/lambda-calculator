import React from "react";
import OperatorButtons from "./OperatorButton"

//import any components needed
import { operators } from "../../../data"
//Import your array data to from the provided data file

const Operators = () => {
  const [getOperator, setOperator] = React.useState(operators)
  return (
    <div>
      {
      getOperator.map((element)=> {
        return <button>{element.value}</button>
      })
    }
    </div>
  );
};
export {Operators};