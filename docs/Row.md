# Row

Use this property to center a child horizontally within a container with flexDirection set to row.

View full example: [Row Example](/example/Row/index.js)

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Row } from 'monalisa-ui';

const Example = () => (
  <View>
    <Row>
      <Text>Value 1</Text>
      <Text>Value 2</Text>
      <Text>Value 3</Text>
    </Row>
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| content       | flex-start    | string    | Describes how to align children within the main axis of their container. [justifyContent](https://facebook.github.io/react-native/docs/layout-props#justifycontent) |
| style         | -             | -         | Style for the row |


#### Example:

- space-between

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Row } from 'monalisa-ui';

const Example = () => (
  <Row content="space-between">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Row>
);

export default Example;
```

- space-around

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Row } from 'monalisa-ui';

const Example = () => (
  <Row content="space-around">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Row>
);

export default Example;
```

- flex-end

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Row } from 'monalisa-ui';

const Example = () => (
  <Row content="flex-end">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Row>
);

export default Example;
```

- space-evenly

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Row } from 'monalisa-ui';

const Example = () => (
  <Row content="space-evenly">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Row>
);

export default Example;
```