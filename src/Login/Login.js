// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, KeyboardAvoidingView,
} from 'react-native';
import { AppRegistry } from 'react-native';
import LoginForm from './LoginForm';

// create a component
class Login extends React.Component {
  render() {
    return (
    // ios View = KeyboardAvoidingView
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../images/Logo.png')} />
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
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
  loginContainer: {
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
export default Login;
