import React from "react";
import SpecialButtons from "./SpecialButton"
//import any components needed
import { specials } from '../../../data';
import './specials.css'
//Import your array data to from the provided data file

const Specials = () => {
    // STEP 2 - add the imported data to state
    const [special, Setspecial] = React.useState(specials)
    return (
        <div className="special">
            {
                special.map((element) => {
                return <button>{element}</button>
                })
            }
        </div>
    );
};
export {Specials};