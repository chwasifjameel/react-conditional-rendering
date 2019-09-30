# React Conditional Rendering

React-Conditional-Rendering is a React based utitly that helps you do conditional renderings in components.

- Do npm install react-conditional-rendering
- Import a component you need
- See magic

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd porject
$ npm install react-conditional-rendering
$ npm start
```

### Usage

```jsx
import React from 'react';
import { RenderIf, RenderComponent } from 'react-conditional-rendering';

export default class extends React.Component {
	state = { buttonPressed: false, renderDummyComponent: false };

	dummyComponent = () => (
		<div
			style={{
				height: 100,
				width: 100,
				backgroundColor: 'yellow',
				overflow: 'hidden',
			}}
		>
			<p>This component only render if the render component is checked</p>
		</div>
	);

	render() {
		const { buttonPressed = false, renderDummyComponent = false } = this.state;
		return (
			<div>
				<RenderIf condition={buttonPressed}>
					<div style={{ height: 100, width: 100, backgroundColor: 'red' }}>
						Rendering with children
					</div>
				</RenderIf>
				<RenderComponent
					condition={renderDummyComponent}
					component={this.dummyComponent}
				/>
				<button
					onClick={() => this.setState({ buttonPressed: !buttonPressed })}
				>
					First Example
				</button>
				<button
					onClick={() =>
						this.setState({ renderDummyComponent: !renderDummyComponent })
					}
				>
					Second Example
				</button>
			</div>
		);
	}
}
```
