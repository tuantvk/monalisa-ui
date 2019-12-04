# SocialIcon

Displays social media networks.

View full example: [SocialIcon Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/SocialIcon/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'monalisa-ui';

const Example = () => (
  <View>
    <SocialIcon
      type="facebook"
    />
    <SocialIcon
      type="twitter"
    />
    <SocialIcon
      type="instagram"
    />
    <SocialIcon
      type="youtube"
    />
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| type          | -             | github,facebook,youtube,instagram,twitter,pinterest,linkedin,vimeo | Social media type **required** |
| raised        | false         | string    | Adds a drop shadow |
| light         | -             | string    | Background to white and icon to primary color |
| style         | -             | string    | Style for the SocialIcon |
| height        | 45            | string    | Height icon |


#### Example:

- SocialIcon raised

```javascript
import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'monalisa-ui';

const Example = () => (
  <View>
    <SocialIcon
      type="facebook"
      raised
    />
    <SocialIcon
      type="twitter"
      raised
    />
    <SocialIcon
      type="instagram"
      raised
    />
    <SocialIcon
      type="youtube"
      raised
    />
  </View>
);

export default Example;
```

- SocialIcon light

```javascript
import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'monalisa-ui';

const Example = () => (
  <View>
    <SocialIcon
      type="facebook"
      light
    />
    <SocialIcon
      type="twitter"
      light
    />
    <SocialIcon
      type="instagram"
      light
    />
    <SocialIcon
      type="youtube"
      light
    />
  </View>
);

export default Example;
```