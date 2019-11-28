import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Example from './example';
import Avatar from './example/Avatar';

const AppNavigator = createStackNavigator({
  Example: {
    screen: Example,
  },
  Avatar: {
    screen: Avatar,
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