# Textarea

Inputs allow users to enter text into a UI.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-textarea.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [Textarea Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Textarea/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Textarea } from 'monalisa-ui';

const Example = () => (
  <View>
    <Textarea
      placeholder="Input value"
    />
    <Textarea
      placeholder="Input value"
      height={150}
    />
    <Textarea
      placeholder="Input value"
      rounded={18}
    />
    <Textarea
      placeholder="Input value"
      borderColor="#ff0000"
    />
  </View>
);

export default Example;
```

#### Configuration

[Input props...](/docs/Input.md)

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| style         | -             | -         | Style for the textarea |
| height        | 100           | number    | Set height for the textarea |
| rounded       | 0             | number    | Set border radius for the textarea |
| borderColor   | -             | string    | Set border color for the textarea |