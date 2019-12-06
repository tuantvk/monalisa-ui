# Text

Text displays words and characters at various sizes.

View full example: [Text Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Text/index.js)

```javascript
import React from 'react';
import { Text } from 'monalisa-ui';

const Example = () => (
  <Text>This is Text component</Text>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| h1            | false         | boolean   | Font size 40 |
| h2            | false         | boolean   | Font size 34 |
| h3            | false         | boolean   | Font size 28 |
| h4            | false         | boolean   | Font size 22 |
| h5            | false         | boolean   | Font size 18 |
| color         | #000          | string    | Set color for the text |
| bold          | false         | boolean   | Set font weight bold for the text |
| style         | -             | -         | Style for the text |


#### Example

```javascript
import React from 'react';
import { View } from 'react-native';
import { Text } from 'monalisa-ui';

const Example = () => (
  <View>
    <Text h1>This is Text h1</Text>
    <Text h2>This is Text h2</Text>
    <Text h3>This is Text h3</Text>
    <Text h4>This is Text h4</Text>
    <Text bold>This is Text bold</Text>
    <Text color="#ff0000">This is Text color red</Text>
    <Text style={{ margin: 20 }}>This is Text custom style</Text>
  </View>
);

export default Example;
```