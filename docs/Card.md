# Card

Cards are a great way to display information, usually containing content and actions about a single subject. 
Cards can contain images, text and more.

**Contents:**
- Card
- Card Image

View full example: [Card Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Card/index.js)

## Card

```javascript
import React from 'react';
import { Text } from 'react-native';
import { Card } from 'monalisa-ui';

const Example = () => (
  <Card>
    <Text>This is content card</Text>
  </Card>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| bordered      | false         | boolean   | Include bordered prop to have border for card |
| rounded       | false         | boolean   | Renders card with slightly round shaped edges |
| style         | -             | -         | Style for the card |


#### Example:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'monalisa-ui';

const Example = () => (
  <View>
    <Card>
      <Text>This is content card</Text>
    </Card>
    <Card bordered>
      <Text>This is content card bordered</Text>
    </Card>
    <Card bordered rounded>
      <Text>This is content card bordered and rounded</Text>
    </Card>
  </View>
);

export default Example;
```


## Card Image

Cards can contain images.


#### Configuration

| Property         | Default       | Option    | Description  |
| ---------------- |:-------------:|:---------:|:------------:|
| source           | -             | -         | The image source (either a remote URL or a local file resource) |
| height           | 150           | number    | Set height for image card |
| imageStyle       | -             | -         | Style for the image card |
| contentStyle     | -             | -         | Style for the content card |


#### Example:

```javascript
import React from 'react';
import { Text } from 'react-native';
import { CardImage } from 'monalisa-ui';

const Example = () => (
  <CardImage
    bordered
    contentStyle={{ padding: 20 }}
    height={150}
    source={{ uri: 'http://lorempixel.com/640/480/city/' }}
  >
    <Text>This is content card image</Text>
  </CardImage>
);

export default Example;
```