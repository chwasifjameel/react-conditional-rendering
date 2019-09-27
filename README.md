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
import { RenderIf } from 'react-conditioanl-rendering';

export default class extends React.Component {
state={ buttonPressed = false };
render() {
  cosnt { buttonPressed=false }=this.state;
    return (
      <RenderIf condition={buttonPressed}>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
      </RenderIf>
      <button onCLick={this.setState({buttonPressed:!buttonPressed})> Click Me</button>
    );
  }
}
```
