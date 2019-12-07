# Col

Align children from top to bottom. 
If wrapping is enabled then the next line will start to the left first item on the top of the container.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-col.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [Col Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Col/index.js)

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Col } from 'monalisa-ui';

const Example = () => (
  <Col>
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Col>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| content       | column        | string    | Align children from top to bottom |
| alignItems    | stretch       | string    | Aligns children in the cross direction |
| style         | -             | -         | Style for the col |


#### Example

- column

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Col } from 'monalisa-ui';

const Example = () => (
  <Col content="column">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Col>
);

export default Example;
```

- column-reverse

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Col } from 'monalisa-ui';

const Example = () => (
  <Col content="column-reverse">
    <Text>Value 1</Text>
    <Text>Value 2</Text>
    <Text>Value 3</Text>
  </Col>
);

export default Example;
```