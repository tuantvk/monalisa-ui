# Divider

Dividers are visual separators of content.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-divider.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [Divider Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Divider/index.js)


```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'monalisa-ui';

const Example = () => (
  <View>
    <Divider />
    <Text>Lorem Ipsum is simply dummy text</Text>
    <Divider bgColor="#ff0000" />
    <Text>Lorem Ipsum is simply dummy text</Text>
    <Divider style={{ backgroundColor: '#000', height: 10 }} />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| bgColor       | #3e50fa       | string    | Background color for divider |
| style         | -             | -         | Style for the divider |