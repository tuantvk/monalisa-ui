# CheckBox

Checkbox component for React Native.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-checkbox.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [CheckBox Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/CheckBox/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'monalisa-ui';

const Example = () => (
  <View>
    <CheckBox />
    <CheckBox value={true} />
    <CheckBox label="This is CheckBox" />
    <CheckBox uncheckColor="#ff0000" activeOpacity={0.8} />
    <CheckBox checkColor="#ff0000" value={true} activeOpacity={0.8} />
    <CheckBox disabled />
    <CheckBox onChange={value => alert(value)} />
  </View>
);

export default Example;
```

#### Configuration

| Property          | Default       | Option    | Description  |
| ----------------- |:-------------:|:---------:|:------------:|
| disabled          | false         | boolean   | If true the user won't be able to toggle the checkbox |
| checkColor        | #000          | string    | Color for checkbox when value true |
| uncheckColor      | #000          | string    | Color for checkbox when value false |
| activeOpacity     | 1             | number    | Determines what the opacity of the wrapped view should be when touch |
| size              | 24            | number    | Size of the icon |
| label             | -             | string    | Display label right checkbox |
| alignVerticalTop  | false         | boolean   | Display checkbox vertical top label |
| onChange          | -             | function  | Invoked with the new boolean value when it changes |
| value             | -             | string    | The value of the checkbox |
| style             | -             | -         | Style for the checkbox |
| styleLabel        | -             | -         | Style for the label |