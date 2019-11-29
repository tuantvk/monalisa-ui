# Icon

Perfect, crisp, high definition icons and pixel ideal fonts.

Here is a repo that lists down icons of available [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) icon families.

View full example: [Icon Example](/example/Icon/index.js)


#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| type          | AntDesign     | string    | Specifies icon family |
| size          | 12            | number    | Size of the icon, can also be passed as fontSize in the style object |
| name          | -             | string    | What icon to show, see Icon Explorer app or one of the links above |
| color         | -             | string    | Color of the icon |
| style         | -             | -         | Style of the icon |
| android       | -             | string    | Name of the icon for android devices |
| ios           | -             | string    | Name of the icon for iOS devices |


#### Example:

```javascript
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'monalisa-ui';

const Example = () => (
  <View>
    <Icon name="pluscircleo" type="AntDesign" size={30} />
    <Icon name="add-user" type="Entypo" size={30} />
    <Icon name="arrow-down" type="EvilIcons" size={30} />
    <Icon name="activity" type="Feather" size={30} />
    <Icon name="glass" type="FontAwesome" size={30} />
    <Icon name="accusoft" type="FontAwesome5" size={30} />
  </View>
);

export default Example;
```

- android and ios

```javascript
import React from 'react';
import { Icon } from 'monalisa-ui';

const Example = () => (
  <Icon
    android="chevron-left"
    ios="chevron-small-left"
    type="Entypo"
    size={30}
  />
);

export default Example;
```