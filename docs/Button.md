# Button

Buttons are touchable elements used to interact with the screen display text, icons.


View full example: [Button Example](/example/Button/index.js)

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


#### Example:

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