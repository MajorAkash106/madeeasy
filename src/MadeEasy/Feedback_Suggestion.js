import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { iOSUIKit } from 'react-native-typography';

import { Actions } from 'react-native-router-flux';
import Head from './CommonHeader';
export default class Feedback_Suggestion extends Component {
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

                   
                    <Button transparent onPress={()=>Actions.faculty()} style={styles.SectionStyle}>
                        <Image style={{ height: 80, width: 100, resizeMode: 'contain' }}
                            source={require('./Images/feedback.png')}
                        />
                        <Text style={iOSUIKit.title3Emphasized}> <Text style={{}}>GIVE FEEDBACK</Text> </Text>
                    </Button>
                    <Button transparent onPress={()=>Actions.suggest()} style={styles.SectionStyle}>
                        <Image style={{ height: 80, width: 100, resizeMode: 'contain' }}
                            source={require('./Images/1463474.png')}
                        />
                        <Text style={iOSUIKit.title3Emphasized}> <Text style={{}}>GIVE SUGGESTION</Text> </Text>
                    </Button>



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
        backgroundColor: '#fff',
        marginBottom: 270,
    },
    textinput: {
        fontSize: 15,
        paddingHorizontal: 20,
        marginTop: 15,
        width: 270,
        padding: 1,
        marginVertical: 12
        // backgroundColor:'red'

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 270,
        height: 100,
        margin: 10,
        // backgroundColor: '#D5D8DC',
        borderColor: '#E60E0F',
        borderWidth: 1,
        // marginTop: 20,
        borderRadius: 10,

    },
    view: {
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        color: "#838586",
        fontSize: 18,
        marginTop: 10
    },
    text2: {
        textAlign: "center",
        color: "#E60E0F",
        fontSize: 15,
    },
});
