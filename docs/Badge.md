# Badge

Badges are small components typically used to communicate a numerical value.

View full example: [Badge Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Badge/index.js)


```javascript
import React from 'react';
import { View } from 'react-native';
import { Badge } from 'monalisa-ui';

const Example = () => (
  <View>
    <Badge value="12" />
    <Badge value="+2" />
    <Badge value="1234" />

    {/* Custom style  */}
    <Badge value="4" bgColor="#ff0000" />
    <Badge value="56" style={{ margin: 20 }} />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| color         | #fff          | string    | Set color for text badge |
| bgColor       | #3e50fa       | string    | Set backgroudColor for text badge |
| value         | -             | -         | Value for badge |
| size          | 24            | number    | Size for badge |
| style         | -             | -         | Style for the badge |