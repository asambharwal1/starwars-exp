import React from 'react';
import Home from './src/Home';
import ShipSearch from './src/ShipSearch';
import ShipDetails from './src/ShipDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Search: ShipSearch,
    Details: ShipDetails,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Starship Search',
      headerTintColor: '#f00',
      headerStyle: {
        backgroundColor: '#000',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}