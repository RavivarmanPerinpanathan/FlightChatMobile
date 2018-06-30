import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import {
  Card,
} from 'react-native-elements';

const bbcLogo = require('../../images/bbc_logo.png');
const wsjLogo = require('../../images/wsj_logo.png');

class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <TouchableHighlight onPress={() => navigation.navigate('Bbc')}>
          <Card
            containerStyle={{ padding: 0, marginTop: 50 }}
            image={bbcLogo}
            imageStyle={{ width: 340, height: 180 }}
          />
        </TouchableHighlight>
,
        <TouchableHighlight onPress={() => navigation.navigate('WallStreet')}>
          <Card
            image={wsjLogo}
            imageStyle={{ width: 340, height: 180 }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

Home.defaultProps = {
  navigation: null,
};

Home.propTypes = {
  navigation: PropTypes.node,
};

export default Home;
