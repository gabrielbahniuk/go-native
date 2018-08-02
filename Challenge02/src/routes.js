import { StackNavigator, TabNavigator } from 'react-navigation';
import Repositories from 'pages/repositories';
const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  initialRouteName: 'Repositories',
});

export default Routes;
