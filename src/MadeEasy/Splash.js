import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { iOSUIKit } from 'react-native-typography';

export default class Splash extends Component {
  constructor(props) {
    console.disableYellowBox = true;
    super();
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    setTimeout(()=>{
      Actions.login();
    },2000)
  }
 
  render() {
    return (
       <View style={styles.welcome}>
         <Image style={{ height: 200, width: 500, resizeMode: 'contain' }}
            source={require('./Images/logo.jpg')}
          />
            <Text style={iOSUIKit.title3Emphasized}>FACULTY FEEDBACK</Text>
         </View>
    
    )
  }
}


const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
