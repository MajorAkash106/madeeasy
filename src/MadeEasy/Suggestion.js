import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { iOSUIKit } from 'react-native-typography';

import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';
import Head from './CommonHeader';

export default class Suggestion extends Component {
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

                    {/* <Image style={{ height: 250, width: 500, margin: 20, resizeMode: 'contain' }}
                        source={require('./Images/logo.jpg')}
                    /> */}

                    <Text style={iOSUIKit.title3Emphasized}> <Text style={{ textDecorationLine: 'underline' }}>SUGGESTION</Text> </Text>


                    <View style={styles.SectionStyle}>
                       
                        <TextInput style={styles.textinput}
                            placeholder="Subject"
                            selectionColor='#EF2E2F'
                            // secureTextEntry={true}
                            // keyboardType='numeric'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>

                    {/* <Text style={iOSUIKit.title3Emphasized}> <Text style={{ textDecorationLine: 'underline' }}>Description</Text> </Text> */}
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        onChangeText={this.onChange}
                        // defaultValue={this.state.text}
                        maxLength={400}
                        placeholder={'Description....'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />



                    <Button style={{ backgroundColor: '#E60E0F', borderRadius: 10, height: 40, width: 150, justifyContent: 'center', marginTop: 10 }}>
                        <Text style={iOSUIKit.bodyEmphasizedWhite}>Submit</Text>
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
        marginBottom:200
    },
    textinput: {
        fontSize: 15,
        // paddingHorizontal: 20,
        // marginTop: 15,
        width: 270,
        // padding: 1,
        // marginVertical: 12
        // backgroundColor:'red'

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        width: 300,
        height: 40,
        margin: 5,
        backgroundColor: '#D5D8DC',
        // borderColor: 'grey',
        // borderWidth: 1.5,
        marginTop: 20,
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
    textareaContainer: {
        height: 300,
        width:300,
        borderRadius:10,
        padding: 15,
        backgroundColor: '#D5D8DC',
        marginTop:50
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
});
