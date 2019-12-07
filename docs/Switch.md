# Switch

Renders a boolean input.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-switch.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [Switch Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Switch/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Switch } from 'monalisa-ui';

const Example = () => (
  <View>
    <Switch />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| style         | -             | -         | Style for the switch |
| height        | 18            | number    | Height switch |
| bgColor       | #3e50fa       | string    | Custom colors for the switch track |
| thumbColor    | #fff          | string    | Color of the foreground switch grip |
| circleStyle   | -             | -         | Style of the thumbColor |
| onChange      | -             | function  | Return value switch |

#### Example

- switch customize

```javascript
import React from 'react';
import { View } from 'react-native';
import { Switch } from 'monalisa-ui';

const Example = () => (
  <View>
    <Switch height={30} />
    <Switch bgColor="#ff0000" thumbColor="#53c641" />
    <Switch onChange={() => alert("Change value")} />
  </View>
);

export default Example;
```