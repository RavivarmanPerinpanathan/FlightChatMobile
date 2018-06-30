// import liraries
import React from 'react';
import {
  View, StyleSheet, Image, KeyboardAvoidingView,
} from 'react-native';
import LoginForm from './LoginForm';

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

const Login = () => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.loginContainer}>
      <Image resizeMode="contain" style={styles.logo} source={require('../../images/Logo.png')} />
    </View>

    <View style={styles.formContainer}>
      <LoginForm />
    </View>
  </KeyboardAvoidingView>
);

export default Login;
