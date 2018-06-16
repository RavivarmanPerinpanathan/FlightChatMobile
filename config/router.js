import React from 'react';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';


import Login from '../src/Login/Login';
import Register from '../src/Register/Register';
import Home from '../src/Home/Home';
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
    }
});