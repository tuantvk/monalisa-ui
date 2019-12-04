# Pricing

Pricing is a component used to display features and pricing tables.

View full example: [Pricing Example](https://github.com/tuantvk/monalisa-ui/blob/master/example/Pricing/index.js)

```javascript
import React from 'react';
import { Pricing } from 'monalisa-ui';

const Example = () => (
  <Pricing
    titleColor="#3e50fa"
    title="Free"
    price="$0"
    info={['1 CPU', '1024MB Memory', '1000GB Bandwidth']}
    button={{ title: 'GET STARTED' }}
  />
);

export default Example;
```

#### Configuration

| Property      | Default       | Option    | Description  |
| ------------- |:-------------:|:---------:|:------------:|
| title         | -             | string    | Title of the pricing |
| titleColor    | -             | string    | Color title |
| price         | -             | string    | Price |
| priceColor    | #000          | string    | Color price |
| info          | []            | array     | Pricing information |
| titleStyle    | -             | -         | Style for the title |
| priceStyle    | -             | -         | Style for the price |
| borderColor   | #dfe1e6       | string    | Border color pricing |
| style         | -             | -         | Style for the pricing |
| button        | -             | object    | Display button bottom |