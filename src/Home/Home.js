import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, WebView, TouchableHighlight, Linking } from 'react-native';
import api from '../../config/api';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Navigator} from 'react-native-deprecated-custom-components'
import {
  StackNavigator,
} from 'react-navigation';
import LoginScreen from '../Login/Login';
import Bbc from '../Views/Bbc';
import WallStreet from '../Views/WallStreet';

class Home extends Component {

  App = StackNavigator({
    Home: { screen: LoginScreen }
  });

  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
    this.state = {
      data: []
    }
    
  }

  navigate(route){
    this.props.navigator.push({
      name
    })
  }
  /*render() {
    const routes = [
      {screen: Bbc, index: 0},
      {screen: WallStreet, index: 1},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        style={{padding: 100}}
      />
    );
  }
}*/

  render() {
    
    //console.log("Rovers: ", this.state.data);
    return (
      <View>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Bbc')}>
        <Card containerStyle={{ padding: 0, marginTop: 50 }}
          image={require('../../images/bbc_logo.png')} imageStyle={{width:340, height:180}}>
        </Card>
        </TouchableHighlight>,
        <TouchableHighlight onPress={() => this.props.navigation.navigate('WallStreet')}>
        <Card
          image={require('../../images/wsj_logo.png')} imageStyle={{width:340, height:180}}>
        </Card>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  card: {
    flex: 1
  },
  user: {
    padding: 20
  },
  image: {
    height: 100,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  name: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  }
});

export default Home;