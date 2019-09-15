import React, { Fragment } from 'react';

// Components are functions, and they must start with a capital letter
function RenderIf({ children, condition }) {
	return condition && <Fragment> {children}</Fragment>;
}

// This export will be picked up in ./index.js
export default RenderIf;
