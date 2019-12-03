# Rating

Ratings are used to collect measurable feedback from users.

View full example: [Rating Example](/example/Rating/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { Rating } from 'monalisa-ui';

const Example = () => (
  <View>
    <Rating />
  </View>
);

export default Example;
```

#### Configuration

| Property              | Default       | Option    | Description  |
| --------------------- |:-------------:|:---------:|:------------:|
| reviews               | ['Bad', 'Okay', 'Good', 'Great', 'Very Good'] | array    | Labels to show when each value is tapped |
| size                  | 30            | number    | Size star |
| style                 | -             | -         | Style for the rating |
| ratingColor           | #979797       | string    | Color for the rating icon |
| ratingBackgroundColor | #f1c40f       | string    | Background color for the rating icon |
| titleStyle            | -             | -         | Style for the title |
| showTitle             | true          | boolean   | Toggle display title |
| defaultRating         | none          | number    | Initial value for the rating |
| onChange              | -             | function  | Return value review |


#### Example:

- rating custom

```javascript
import React from 'react';
import { View } from 'react-native';
import { Rating } from 'monalisa-ui';

const Example = () => (
  <View>
    <Rating
      defaultRating={1}
    />
    <Rating
      defaultRating={4}
      ratingBackgroundColor="#ff0000"
    />
    <Rating
      showTitle={false}
      defaultRating={4}
    />
  </View>
);

export default Example;
```