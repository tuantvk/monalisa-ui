# Button

Buttons are touchable elements used to interact with the screen display text, icons.

**Contents:**
- Button
- Button Group

View full example: [Button Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Button/index.js)


## Button

```javascript
import React from 'react';
import { View } from 'react-native';
import { Button } from 'monalisa-ui';

const Example = () => (
  <View>
    <Button
      title="Default"
    />
    <Button
      title="Button transparent"
      transparent
    />
    <Button
      title="Button outline"
      outline
    />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| title         | -             | string    | Button title |
| activeOpacity | 0.9           | number    | Determines what the opacity of the wrapped view should be when touch is active |
| borderRadius  | 3             | number    | Button border radius |
| bgColor       | #3e50fa       | string    | Background color button |
| titleColor    | #fff          | string    | Color title |
| buttonStyle   | -             | -         | Style for the button |
| titleStyle    | -             | -         | Style for the title |
| loading       | false         | boolean   | Display a loading spinner |
| loadingColor  | #3e50fa       | string    | Color spinner |
| disabled      | false         | boolean   | Disables user interaction |
| transparent   | false         | boolean   | Button transparent |
| outline       | -             | string    | Button outline |
| outlineWidth  | 1             | number    | Width outline |
| raised        | false         | boolean   | Raised button styling |
| iconRight     | -             | element   | Displays Icon to the right of title |


#### Example

```javascript
import React from 'react';
import { View } from 'react-native';
import { Button } from 'monalisa-ui';

const Example = () => (
  <View>
    <Button
      title="Raised"
      raised
    />
    <Button
      title="Raised and Outline"
      outline
      raised
    />
     <Button
      title="Loading"
      loading
      outline
    />
    <Button
      title="Disabled"
      disabled
    />
    <Button
      title="Icon"
      iconRight={<Icon name="checkcircleo" color="#fff" size={20} />}
    />
  </View>
);

export default Example;
```


## Button Group

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from 'monalisa-ui';

const ButtonGroupItem = () => <Text>ButtonGroupItem</Text>

const Example = () => (
  <View>
    <ButtonGroup
      buttons={['Like', 'Share', 'More']}
      onPress={index => alert(index)}
    />
    <ButtonGroup
      buttons={[{ component: ButtonGroupItem }, { component: ButtonGroupItem }]}
      onPress={index => alert(index)}
    />
  </View>
);

export default Example;
```

#### Configuration

[Button props...](/docs/Button.md)

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| buttons       | [ ]            | array     | Array of buttons for component **(required)**, { component: componentName } if returning a component |
| onPress       | -             | function  | Method to update Button Group index |
| buttonStyle   | -             | -         | Style for the Button |
| style         | -             | -         | Style for the ButtonGroup |