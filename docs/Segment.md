# Segment

Segments are best used as an alternative for tabs.

View full example: [Segment Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Segment/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Segment } from 'monalisa-ui';

const Example = () => (
  <View>
    <Segment>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Segment>
  </View>
);

export default Example;
```

#### Configuration

| Property        | Default       | Option    | Description  |
| --------------- |:-------------:|:---------:|:------------:|
| activeOpacity   | 1             | number    | Determines what the opacity of the wrapped view should be when touch is active |
| colorActive     | #fff          | string    | Color text when active |
| bgColorActive   | #3e50fa       | string    | Background color when active |
| colorUnactive   | #3e50fa       | string    | Color text when unactive |
| defaultValue    | 0             | number    | Default value tabs |
| onChange        | -             | function  | Return index tab when change |


#### Example

- Segment custom

```javascript
import React from 'react';
import { View } from 'react-native';
import { Segment } from 'monalisa-ui';

const Example = () => (
  <View>
    <Segment
      colorActive="#fff"
      bgColorActive="#ff0000"
      colorUnactive="#fe6845"
      onChange={index => alert(index)}
    >
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Segment>
    <Segment style={{ marginTop: 30 }}>
      <Text>One</Text>
      <Text>Two</Text>
    </Segment>
  </View>
);

export default Example;
```