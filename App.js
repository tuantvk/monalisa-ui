import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example from './example';
import Avatar from './example/Avatar';
import Row from './example/Row';
import Icon from './example/Icon';
import Card from './example/Card';
import Badge from './example/Badge';

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
}, {
  initialRouteName: 'Example',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

const App = createAppContainer(AppNavigator);

export default App;