//import liraries
import React, { Component } from 'react';
import api from '../../config/api';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert, StatusBar, NavigatorIOS} from 'react-native';

// create a component
class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style = {styles.input} 
               autoCapitalize="none" 
               autoCorrect={false} 
               keyboardType='email-address' 
               ref={(input)=> this.loginInput = input}
               onSubmitEditing={() => this.passwordInput.focus()} 
               returnKeyType="next" 
               placeholder='Email' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}   
                            returnKeyType="go" 
                            ref={(input)=> this.passwordInput = input} 
                            placeholder='Password' 
                            placeholderTextColor='rgba(225,225,225,0.7)' 
                            secureTextEntry/>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => api.login(this.userInput, this.passwordInput)}>
                            <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
       },
       input:{
           height: 40,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 10,
           color: '#fff'
       },
       buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15
       },
       buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       }
});

//make this component available to the app
export default LoginForm;
