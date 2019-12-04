# ArticleCard

Build awesome article card for your blog articles quickly.

View full example: [ArticleCard Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/ArticleCard/index.js)

```javascript
import React from 'react';
import { View } from 'react-native';
import { ArticleCard } from 'monalisa-ui';

const datas = [
  {
    img: 'http://lorempixel.com/640/480/abstract',
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
  {
    img: 'http://lorempixel.com/640/480/abstract',
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
  {
    img: 'http://lorempixel.com/640/480/abstract',
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
];

const Example = () => (
  <View>
    {
      datas.map((data, index) => (
        <ArticleCard
          key={index}
          {...data}
          style={{ marginBottom: 15 }}
        />
      ))
    }
  </View>
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| img           | -             | -         | The address of the image |
| title         | -             | string    | The title of the article |
| category      | -             | string    | The category of the article |
| author        | -             | string    | The author of the article |
| time          | -             | string    | The time of the article |
| style         | -             | -         | Style for the article card |
| imageStyle    | -             | -         | Style for the image |
| categoryStyle | -             | -         | Style for the category |
| titleStyle    | -             | -         | Style for the title |
| footerStyle   | -             | -         | Style for the footer |
| activeOpacity | -             | number    | Determines what the opacity of the wrapped view should be when touch |