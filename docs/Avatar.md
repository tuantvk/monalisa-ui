# Avatar

A component that represents a user.

**Contents:**
- Avatar
- Avatar Group

View full example: [Avatar Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Avatar/index.js)

## Avatar

```javascript
import React from 'react';
import { Avatar } from 'monalisa-ui';

const Example = () => (
  <Avatar
    source={{ uri: 'https://picsum.photos/id/434/200/200' }}
  />
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| circle        | false         | boolean   | Shapes the avatar to a circle |
| rounded       | false         | boolean   | Renders avatar with slightly round shaped edges |
| style         | -             | -         | Style for the avatar |
| isVisible     | true          | boolean   | Display avatar background gray |
| width         | 50            | number    | Width of the avatar |
| height        | 50            | number    | Height of the avatar |
| value         | -             | string    | Show value in avatar |


#### Example:

```javascript
import React from 'react';
import { View  } from 'react-native';
import { Avatar } from 'monalisa-ui';

const Example = () => (
  <View>
    <Avatar
      source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      width={80}
      height={80}
      circle
    />
    <Avatar
      source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      width={80}
      height={80}
      rounded
    />
    <Avatar
      source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      style={{ marginLeft: 20 }}
    />
  </View>
);

export default Example;
```

## Avatar Group

```javascript
import React from 'react';
import { AvatarGroup } from 'monalisa-ui';

const groups = [
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
];

const Example = () => (
  <AvatarGroup
    data={groups}
  />
);

export default Example;
```

#### Configuration

| Property      | Default       | Option      | Description  |
| ------------- |:-------------:|:-----------:|:------------:|
| data          | -             | array       | Array of avatar for component **(required)** |
| appearance    | stack         | stack, grid | Indicates the shape of the avatar |
| maxCount      | 0             | number      | The maximum number of avatars allowed in the grid |


#### Example:

- stack

```javascript
import React from 'react';
import { AvatarGroup } from 'monalisa-ui';

const groups = [
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
];

const Example = () => (
  <AvatarGroup
    data={groups}
  />
);

export default Example;
```

- grid

```javascript
import React from 'react';
import { AvatarGroup } from 'monalisa-ui';

const groups = [
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
];

const Example = () => (
  <AvatarGroup
    data={groups}
    appearance="grid"
  />
);

export default Example;
```

- max count

```javascript
import React from 'react';
import { AvatarGroup } from 'monalisa-ui';

const groups = [
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
];

const Example = () => (
  <AvatarGroup
    data={groups}
    appearance="grid"
    maxCount={4}
  />
);

export default Example;
```