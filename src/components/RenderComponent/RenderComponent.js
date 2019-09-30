import React, { Fragment } from 'react';

// Components are functions, and they must start with a capital letter
function RenderComponent({ component, condition }) {
	return condition && <Fragment> {component}</Fragment>;
}

// This export will be picked up in ./index.js
export default RenderComponent;
