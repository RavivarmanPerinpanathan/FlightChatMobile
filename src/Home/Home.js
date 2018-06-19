import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, WebView, TouchableHighlight } from 'react-native';
import api from '../../config/api';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  onTestPress = () => {
    this.props.navigator.push('Login');
}

  render() {
    //console.log("Rovers: ", this.state.data);
    return (
      <View>
        <TouchableHighlight onPress={() => this.onTestPress()}>
        <Card containerStyle={{ padding: 0, marginTop: 50 }}
          image={require('../../images/bbc_logo.png')} imageStyle={{width:345, height:200}}>
        </Card>
        </TouchableHighlight>,
        <Card
          image={require('../../images/wsj_logo.png')} imageStyle={{width:345, height:200}}>
        </Card>
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