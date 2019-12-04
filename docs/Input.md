# Input

Inputs allow users to enter text into a UI.


View full example: [Input Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Input/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Input } from 'monalisa-ui';

const Example = () => (
  <View>
    <Input
      placeholder="Input value"
    />
    <Input
      transparent
      placeholder="Input transparent"
    />
    <Input
      label="Username"
      placeholder="Input transparent"
    />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| leftIcon      | -             | element   | Displays Icon to the left of input |
| rightIcon     | -             | element   | Displays Icon to the right of input |
| transparent   | false         | boolean   | Remove border bottom |
| style         | -             | -         | Style for the col |
| error         | -             | string    | Error message input |
| errorStyle    | -             | -         | Style for the error message |
| label         | -             | string    | Set label input |
| labelStyle    | -             | -         | Style for the label |


#### Example:

- input error

```javascript
import React from 'react';
import { View } from 'react-native';
import { Input } from 'monalisa-ui';

const Example = () => (
  <View>
    <Input
      placeholder="Input value"
      error="Missing value"
      errorStyle={{ color: '#ff0000', fontSize: 11 }}
    />
  </View>
);

export default Example;
```

- input icon

```javascript
import React from 'react';
import { View } from 'react-native';
import { Input } from 'monalisa-ui';
import Icon from 'react-native-vector-icons/AntDesign';

const Example = () => (
  <View>
    <Input
      placeholder="Input left icon"
      leftIcon={<Icon size={22} name="mail" />}
    />
    <Input
      placeholder="Input right icon"
      rightIcon={<Icon size={22} name="close" />}
    />
  </View>
);

export default Example;
```