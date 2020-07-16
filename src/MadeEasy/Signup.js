import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';
import { iOSUIKit } from 'react-native-typography';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends Component {
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

                    <View>
                        <Image style={{ height: 100, width: 100, resizeMode: 'contain' }}
                            source={require('./Images/man.png')}
                        />
                        <TouchableOpacity>
                            <Text style={{textDecorationLine:'underline',color:'blue', margin:10}}>Profile Photo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SectionStyle}>
                        {/* <Icon name='user' size={20} color='#00aff0' /> */}
                        <Image style={{ height: 28, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/person-name.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Name"
                            selectionColor='#EF2E2F'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>

                    <View style={styles.SectionStyle}>
                        {/* <Icon name='user' size={20} color='#00aff0' /> */}
                        <Image style={{ height: 28, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/email.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Email"
                            selectionColor='#EF2E2F'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>


                    <View style={styles.SectionStyle}>
                        {/* <Icon name='user' size={20} color='#00aff0' /> */}
                        <Image style={{ height: 22, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/phone.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Phone"
                            selectionColor='#EF2E2F'
                            keyboardType='numeric'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>


                    <View style={styles.SectionStyle}>
                       
                        <Image style={{ height: 18, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/ID.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Student Id"
                            selectionColor='#EF2E2F'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>


                    <View style={styles.SectionStyle}>
               
                        <Image style={{ height: 18, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/lock.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Password"
                            selectionColor='#EF2E2F'
                            secureTextEntry={true}
                            keyboardType='numeric'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>


                    <View style={styles.SectionStyle}>
                        {/* <Icon name='user' size={20} color='#00aff0' /> */}
                        <Image style={{ height: 18, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/lock.png')}
                        />
                        <TextInput style={styles.textinput}
                            placeholder="Confirm Password"
                            selectionColor='#EF2E2F'
                            secureTextEntry={true}
                            keyboardType='numeric'
                            onChangeText={(value) => this.setState({ phone: value })} />
                    </View>


                    <Button onPress={()=>Actions.login()} style={{ backgroundColor: '#E60E0F', borderRadius: 10, height: 40, width: 150, justifyContent: 'center', marginTop: 10 }}>
                        <Text style={iOSUIKit.bodyEmphasizedWhite}>SIGN UP</Text>
                    </Button>




                    <View style={styles.view}>
                        <Text style={styles.text2}>If you already have an account? </Text>
                        <TouchableOpacity onPress={()=>Actions.login()}>
                            <Text style={{ textAlign: "center", color: "#E60E0F", fontSize: 15, textDecorationLine: 'underline' }}>Sign In Now</Text>
                        </TouchableOpacity>
                    </View>

                    {/* </View> */}

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
        // margin: 5,
        // backgroundColor: '#D5D8DC',
        // borderColor: 'grey',
        borderBottomWidth:1,
        borderBottomColor:'#E60E0F',
        marginTop: 5,
        // borderRadius: 10,

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
