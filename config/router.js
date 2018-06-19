import React from 'react';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';


import Login from '../src/Login/Login';
import Register from '../src/Register/Register';
import Home from '../src/Home/Home';
import Bbc from '../src/Views/Bbc';
import WallStreet from '../src/Views/WallStreet';
import { Platform } from 'react-native'

const tabBarOptions = Platform.OS === 'ios' ? 
  {
    // iOS tabBarOptions
    showLabel: true,
    showIcon: true
  } : {
    // Android tabBarOptions
    showIcon: true,
    showLabel: true
  }

export const Tabs = createBottomTabNavigator({
    Login:{
        screen: Login,
    },
    Register:{
        screen:Register,
    },
    Home:{
        screen:Home,
    },
    Bbc:{
        screen:Bbc,
    },
    WallStreet:{
        screen:WallStreet,
    }
});