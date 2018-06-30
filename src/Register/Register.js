// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, KeyboardAvoidingView,
} from 'react-native';
import { AppRegistry } from 'react-native';
import RegisterForm from './RegisterForm';

// create a component
class Register extends React.Component {
  /* static navigationOptions = {
        tabBarIcon:({tinyColor}) => (
            <Image
             source={require('../../images/Logo.png')}
             style={{width:22, height:22, tinyColor:'white'}}>
            </Image>
        )
    } */
  render() {
    return (
    // ios View = KeyboardAvoidingView
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.registerContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../images/Logo.png')} />
        </View>

        <View style={styles.formContainer}>
          <RegisterForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0191C8',
  },
  registerContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100,
  },
});

// make this component available to the app
export default Register;
