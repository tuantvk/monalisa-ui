# Tag

This component displays as a tag with an optional button to remove the given tag.

View full example: [Tag Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Tag/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Tag } from 'monalisa-ui';

const Example = () => (
  <View>
    <Tag text="Base tag" />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| text          | -             | string    | Text to be displayed in the tag |
| color         | #000          | string    | The text color |
| bgColor       | #dfe1e6       | string    | Background color for the tag |
| iconLeft      | -             | element   | Displays Icon to the left of text |
| iconRight     | -             | element   | Displays Icon to the right of text |
| size          | 6             | number    | Size for the tag |
| style         | -             | -         | Style for the tag |


#### Example:

- tag color and background color

```javascript
import React from 'react';
import { View } from 'react-native';
import { Tag } from 'monalisa-ui';

const Example = () => (
  <View>
    <Tag text="Tag color" color="#ff0000" />
    <Tag text="Tag color and background color" color="#fff" bgColor="#000" />
  </View>
);

export default Example;
```

- tag icon

```javascript
import React from 'react';
import { View } from 'react-native';
import { Tag } from 'monalisa-ui';

const Example = () => (
  <View>
    <Tag text="Tag icon left" iconLeft={<Icon name="github" />} />
    <Tag text="Tag icon right" iconRight={<Icon name="close" />} />
  </View>
);

export default Example;
```

- tag button

```javascript
import React from 'react';
import { View } from 'react-native';
import { Tag } from 'monalisa-ui';

const Example = () => (
  <View>
    <Tag text="Tag button" activeOpacity={1} onPress={() => alert("Hello from Tag")} />
  </View>
);

export default Example;
```