import React, { Component } from 'react';
import {
  Text, View, FlatList, Linking,
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import api from '../../config/api';


class Bbc extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentWillMount() {
    api.getBbc().then((res) => {
      this.setState({
        data: res.articles,
      });
    });
  }

  renderItem({ item }) {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Card
          style={{ width: 50, height: 50 }}
          title={item.title}
          image={{ uri: item.urlToImage }}
          imageStyle={{ width: 345, height: 200, alignItems: 'center' }}
          containerStyle={{ padding: 0, marginTop: 50 }}
        >
          <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>

          <Button
            onPress={() => { Linking.openURL(item.url); }}
            icon={<Icon name="code" color="#ffffff" />}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0,
            }}
            title="READ MORE"
          />
        </Card>
      </View>
    );
  }

  render() {
    const { data } = this.state;

    // console.log("Rovers: ", this.state.data);
    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
        />
      </View>
    );
  }
}


export default Bbc;
