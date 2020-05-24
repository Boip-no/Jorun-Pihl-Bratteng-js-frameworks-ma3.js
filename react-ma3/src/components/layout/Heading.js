// This should render its content prop in h1 tags

import React from "react";
import { render } from "node-sass";

function Heading(props) {
    return (
        <h1>My name is {props.name}</h1>
    );
}
export default Heading;