import React, { Component } from 'react';

import { Text, View, StyleSheet, Image, FlatList  } from 'react-native';

import api from '../../config/api';

import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
   ]
   



class Home extends Component {

  constructor(props){
    super(props);
    this.state ={
      id: []
    }
  }

  componentWillMount(){
    api.getRovers().then((res) =>{
      this.setState({
        copyright:res.copyright,
        hdurl:res.hdurl,
        date:res.date,
        explanation:res.explanation,
        title:res.title
      })
    });
    /*api.getImages().then((res) =>{
      this.setState({
        data:res.photos
      })
    });*/
  }

    render() {
        console.log("Rovers: ", this.state.id);
        /*return (
          <View>
            <FlatList>
              data={this.state.data}
              renderItem={({photos}) =>
                <View>
                  <Text style={{marginBottom: 10}}>
                    {photos.id}
                  </Text>
                </View>
            }
            </FlatList>
          </View>
          
        )*/
        return (
          <View>
          <Card
            title={this.state.title}
            image={this.state.hdurl}
            containerStyle={{padding: 0, marginTop: 50}}>
            <Text style={{marginBottom: 10}}>
            {this.state.explanation}
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
           <Card containerStyle={{padding: 0, marginTop: 10}} >
           {
             users.map((u, i) => {
               return (
                 <ListItem
                   key={i}
                   roundAvatar
                   title={this.state.title}
                   avatar={this.state.hdurl}
                 />
               );
             })
           }
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
     image:{
         height: 100,
         backgroundColor: 'rgba(225,225,225,0.2)',
         marginBottom: 10,
         padding: 10,
         color: '#fff'
     },
     name:{
         backgroundColor: '#2980b6',
         paddingVertical: 15
     }
});

   
   // implemented without image with header
   /*
    <Card
            title={this.state.title}
            image={this.state.hdurl}
            containerStyle={{padding: 0, marginTop: 50}}>
            <Text style={{marginBottom: 10}}>
            {this.state.explanation}
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
   */

   export default Home;