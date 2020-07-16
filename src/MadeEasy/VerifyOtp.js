import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { iOSUIKit } from 'react-native-typography';

import { Actions } from 'react-native-router-flux';

export default class VerifyOtp extends Component {
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
                {/* <ScrollView keyboardShouldPersistTaps={'never'}></ScrollView> */}
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

                    <Image style={{ height: 200, width: 500, margin: 20, resizeMode: 'contain' }}
                        source={require('./Images/logo.jpg')}
                    />

                    <Text style={iOSUIKit.title3Emphasized}> <Text style={{textDecorationLine:'underline'}}>VERIFY OTP</Text> </Text>
                    
                    

                    <View style={styles.SectionStyle}>
                        {/* <Icon name='user' size={20} color='#00aff0' /> */}
                        {/* <Image style={{ height: 25, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/open_mail.png')}
                        /> */}
                        <TextInput style={styles.textinput}
                            placeholder="OTP"
                            selectionColor='#EF2E2F'
                            keyboardType='numeric'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>



                    <TouchableOpacity onPress={this.signup}>
                                <Text style={{ textAlign: "center", color: "#E60E0F", fontSize: 16,textDecorationLine:'underline',textDecorationStyle:'solid' }}>Resend OTP
                                </Text>
                            </TouchableOpacity>

                    <Button onPress={()=>Actions.set_password()} style={{ backgroundColor: '#E60E0F', borderRadius: 10, height: 40, width: 150, justifyContent: 'center', marginTop: 10 }}>
                        <Text style={iOSUIKit.bodyEmphasizedWhite}>Verify OTP</Text>
                    </Button>
                    
                    <View style={styles.view}>
                            {/* <Text style={styles.text2}>If you have already an account? </Text> */}
                            <TouchableOpacity onPress={()=>Actions.login()}>
                                <Text style={{ textAlign: "center", color: "#E60E0F", fontSize: 16,textDecorationLine:'underline',textDecorationStyle:'solid' }}>Back to Login
                                </Text>
                            </TouchableOpacity>
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
        alignItems: 'baseline',
        width: 270,
        height: 50,
        margin: 5,
        // backgroundColor: '#D5D8DC',
        // borderColor: 'grey',
        // borderWidth: 1.5,
        borderBottomWidth:1,
        borderBottomColor:'#E60E0F',
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
});
