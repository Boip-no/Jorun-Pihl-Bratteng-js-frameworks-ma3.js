/*

This should render 3 li items with dummy lorem ipsum text inside a ul. This component won't receive any props.

*/

import React from "react";

export function NewsList() {
    return (
        <ul>
            <li>lorem ipsum dummy text</li>
            <li>Some more dummy text</li>
            <li>And even more dummy text</li>
        </ul>
    );
}

export default NewsList;