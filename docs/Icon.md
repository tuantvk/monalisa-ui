# Icon

Perfect, crisp, high definition icons and pixel ideal fonts.

Here is a repo that lists down icons of available [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) icon families.


```bash
yarn add react-native-vector-icons

# or
# npm i --save react-native-vector-icons
```

> You need to follow below steps in order to work with RN>=0.60
>
> Now back to root folder and create a file named `react-native.config.js` in root of your project and add below code in this file.

```javascript
// react-native.config.js
module.exports = {
    assets: ['react-native-vector-icons']
};
```

And finally run

```bash
yarn react-native link
```


View full example: [Icon Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Icon/index.js)


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