import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, StatusBar } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Head from './CommonHeader';
import { iOSUIKit } from 'react-native-typography';
export default class Approve extends Component {
    constructor(props) {
        console.disableYellowBox = true;
        super();
    }

    static navigationOptions = {
        header: null
    }



    render() {
        return (
            <Container>
               <Head/>

                <View style={styles.welcome}>
                    <StatusBar
                        barStyle="dark-content"
                        // dark-content, light-content and default
                        hidden={false}
                        //To hide statusBar
                        backgroundColor="#E60E0F"
                        //Background color of statusBar
                        translucent={false}
                        //allowing light, but not detailed shapes
                        networkActivityIndicatorVisible={true}
                    />

                    <Image style={{ height: 150, width: 150, resizeMode: 'contain',margin:30 }}
                        source={require('./Images/man.png')}
                    />

                    <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom:400}}>
                        <Text style={iOSUIKit.title3Emphasized}>
                            <Text>Your Account is</Text>
                        </Text>
                        <Text style={iOSUIKit.title3Emphasized}>
                            <Text>Not Approved Yet !</Text>
                        </Text>
                    </View>

                </View>
            </Container>
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
