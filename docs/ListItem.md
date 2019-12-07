# ListItem

Display rows of information, such as a contact list or  menu. 
They are very customizeable and can contain avatars, icons, and more.

<p align="center">
  <img
	  src="https://raw.githubusercontent.com/tuantvk/monalisa-ui/master/assets/monalisaui-listitem.png"
		alt="MonalisaUI"
		width="260">
</p>

View full example: [ListItem Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/ListItem/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'monalisa-ui';

const Example = () => (
  <View>
    <ListItem
      title="Matteo Kilback"
      subTitle="United States of America"
    />
    <ListItem
      title="Lauriane Dibbert"
      subTitle="United States of America"
    />
  </View>
);

export default Example;
```


#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| title         | -             | string    | Title of list item |
| subTitle      | -             | string    | Subtitle text |
| left          | -             | element   | Display left component |
| right         | -             | element   | Display right component |
| footer        | -             | element   | Display footer component |
| titleStyle    | -             | -         | Style for the title |
| subTitleStyle | -             | -         | Style for the subTitle |
| style         | -             | -         | Style for the ListItem |
| avatar        | -             | -         | Displays an Avatar on the left |
| avatarStyle   | -             | -         | Style for the avatar |
| border        | true          | boolean   | Border bottom ListItem |


#### Example

- ListItem avatar

```javascript
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'monalisa-ui';

const Example = () => (
  <View>
    <ListItem
      title="Jordy Ratke"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg' }}
    />
    <ListItem
      title="Elvie Lakin"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/128.jpg' }}
    />
    <ListItem
      title="Alda Dicki"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg' }}
      right={<Icon name="right" size={24} />}
    />
  </View>
);

export default Example;
```

- ListItem icon

```javascript
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'monalisa-ui';
import Icon from 'react-native-vector-icons/AntDesign';

const Example = () => (
  <View>
    <ListItem
      title="Filomena Casper"
      subTitle="United States of America"
      left={<Icon name="picture" size={24} />}
      right={<Icon name="staro" size={24} />}
    />
    <ListItem
      title="Antonio Kuvalis"
      subTitle="United States of America"
      left={<Icon name="shoppingcart" size={24} />}
      right={<Icon name="staro" size={24} />}
    />
  </View>
);

export default Example;
```

- ListItem no border

```javascript
import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'monalisa-ui';

const Example = () => (
  <View>
    <ListItem
      title="Jordy Ratke"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg' }}
      border={false}
    />
    <ListItem
      title="Elvie Lakin"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/128.jpg' }}
      border={false}
    />
  </View>
);

export default Example;
```