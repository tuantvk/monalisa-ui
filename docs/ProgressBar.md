# ProgressBar

Progress indicators.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-progressbar.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [ProgressBar Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/ProgressBar/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { ProgressBar } from 'monalisa-ui';

const Example = () => (
  <View>
    <ProgressBar value={100} />
    <ProgressBar height={15} value={30} />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option             | Description  |
| ------------- |:-------------:|:------------------:|:------------:|
| height        | 12            | number             | Height of the progress bar |
| borderColor   | #3e50fa       | string             | Color of outer border |
| bgColor       | #3e50fa       | string             | Background color of the progress bar |
| borderRadius  | -             | any                | Rounding of corners, set to 0 to disable |
| borderWidth   | 1             | number             | Width of outer border |
| value         | 0             | string | number    | Progress of whatever the indicator is indicating |
| style         | -             | -                  | Style of the progress bar |


#### Example

- ProgressBar custom

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar } from 'monalisa-ui';

const Example = () => (
  <View>
    <ProgressBar style={styles.bar} value={30} height={30} />
    <ProgressBar style={styles.bar} value={30} bgColor="#ff0000" borderColor="#ff0000" />
    <ProgressBar style={styles.bar} value={30} borderWidth={3} height={20} />
    <ProgressBar style={styles.bar} value={80}>
      <Text>80</Text>
    </ProgressBar>
  </View>
);

export default Example;
```