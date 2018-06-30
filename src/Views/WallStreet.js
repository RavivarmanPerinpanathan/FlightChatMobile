import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, WebView, Linking} from 'react-native';
import api from '../../config/api';
import { Card, ListItem, Button, Icon, SCREEN_WIDTH, SCREEN_HEIGHT } from 'react-native-elements'

class WallStreet extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <Card style={{width:50, height:50}}
          title={item.title}
          image={{ uri:item.urlToImage }}
          imageStyle={{width:345, height:200, alignItems: 'center',}}
          containerStyle={{ padding: 0, marginTop: 50 }}>
          <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>
          
          <Button onPress={()=>{ Linking.openURL(item.url)}}
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='READ MORE' />
        </Card>
      </View>
    )
  }

  componentWillMount() {
    api.getWallStreet().then((res) => {
      this.setState({
        data: res.articles
      })
    });
  }

  render() {
    //console.log("Rovers: ", this.state.data);
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    width: 100,
    height: 100,
  },
  user: {
    padding: 20
  },
  image: {
    height: 100,
    width:50,
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

export default WallStreet;