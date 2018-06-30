// import liraries
import React from 'react';
import {
  View, StyleSheet, Image, KeyboardAvoidingView,
} from 'react-native';
import RegisterForm from './RegisterForm';

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

const Register = () => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.registerContainer}>
      <Image resizeMode="contain" style={styles.logo} source={require('../../images/Logo.png')} />
    </View>

    <View style={styles.formContainer}>
      <RegisterForm />
    </View>
  </KeyboardAvoidingView>
);

export default Register;
