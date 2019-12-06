# Theme

The main thing you need to change is to start using the style rules from the props.style property, 
instead of using the static variable defined alongside the component.
This allows us to merge the default style with any theme style that may be active in the app, 
and provide the final style to components.

#### Example

```javascript
import React, { Component } from 'react';
import { StyleProvider } from 'monalisa-ui';

const Login = () => (
  <Text>Hello MonalisaUI</Text>
);

class App extends Component {
  render() {
    const configApp = {
      color: '#ff0000',
      style: {
        fontFamily: 'Roboto',
        fontWeight: '400',
      }
    };

    return (
      <StyleProvider style={configApp}>
        <Login />
      </StyleProvider>
    );
  }
};
export default App;
```