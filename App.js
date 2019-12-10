/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example from './example';
import Avatar from './example/Avatar';
import Row from './example/Row';
import Icon from './example/Icon';
import Card from './example/Card';
import Badge from './example/Badge';
import Col from './example/Col';
import Tag from './example/Tag';
import Text from './example/Text';
import Input from './example/Input';
import Textarea from './example/Textarea';
import Button from './example/Button';
import Spinner from './example/Spinner';
import ListItem from './example/ListItem';
import Divider from './example/Divider';
import Switch from './example/Switch';
import Pricing from './example/Pricing';
import SocialIcon from './example/SocialIcon';
import Rating from './example/Rating';
import ArticleCard from './example/ArticleCard';
import Segment from './example/Segment';
import ProgressBar from './example/ProgressBar';
import CheckBox from './example/CheckBox';

const AppNavigator = createStackNavigator({
  Example: {
    screen: Example,
  },
  Avatar: {
    screen: Avatar,
  },
  Row: {
    screen: Row,
  },
  Icon: {
    screen: Icon,
  },
  Card: {
    screen: Card,
  },
  Badge: {
    screen: Badge,
  },
  Col: {
    screen: Col,
  },
  Tag: {
    screen: Tag,
  },
  Text: {
    screen: Text,
  },
  Input: {
    screen: Input,
  },
  Textarea: {
    screen: Textarea,
  },
  Button: {
    screen: Button,
  },
  Spinner: {
    screen: Spinner,
  },
  ListItem: {
    screen: ListItem,
  },
  Divider: {
    screen: Divider,
  },
  Switch: {
    screen: Switch,
  },
  Pricing: {
    screen: Pricing,
  },
  SocialIcon: {
    screen: SocialIcon,
  },
  Rating: {
    screen: Rating,
  },
  ArticleCard: {
    screen: ArticleCard,
  },
  Segment: {
    screen: Segment,
  },
  ProgressBar: {
    screen: ProgressBar,
  },
  CheckBox: {
    screen: CheckBox,
  },
}, {
  initialRouteName: 'Example',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

const App = createAppContainer(AppNavigator);

export default App;