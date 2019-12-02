# Spinner

Displays a circular loading indicator.

View full example: [Spinner Example](/example/Spinner/index.js)


```javascript
import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'monalisa-ui';

const Example = () => (
  <View>
    <Spinner />
    <Spinner title="Loading..." />
    <Spinner bgColor="#ff0000" color="#fff" />
    <Spinner size="large" color="#0000ff" />
    <Spinner style={{ marginVertical: 20 }} />
    <Spinner titleStyle={{ fontSize: 16 }} title="Loading..." />
  </View>
);

export default Example;
```

#### Configuration

[View props...](https://facebook.github.io/react-native/docs/view#props)

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| color         | #3e50fa       | string    | The foreground color of the spinner |
| bgColor       | #fff          | string    | Background color spinner |
| title         | -             | string    | Title spinner |
| style         | -             | -         | Style for the container spinner |
| titleStyle    | -             | -         | Style for the title spinner |
| spinnerStyle  | -             | -         | Style for the spinner |