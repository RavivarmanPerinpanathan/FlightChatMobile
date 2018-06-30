import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Login from '../src/Login/Login';
import Register from '../src/Register/Register';
import Home from '../src/Home/Home';
import Bbc from '../src/Views/Bbc';
import WallStreet from '../src/Views/WallStreet';

/* Starts from here  */

class Router extends Component {
  constructor(props) {
    super(props);

    this.renderScens = this.renderScens.bind(this);
  }

  renderScens(route, navigator) {
    if (route.name === 'bbcpage') {
      return <Bbc navigator={navigator} />;
    } if (route.name === 'wallstreetpage') {
      return <WallStreet navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'bbcpage' }}
        renderScens={this.renderScens}
      />
    );
  }
}
/*  Ends here  */

export const Tabs = createBottomTabNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Home: {
    screen: Home,
  },
  Bbc: {
    screen: Bbc,
  },
  WallStreet: {
    screen: WallStreet,
  },
});

export default Router;