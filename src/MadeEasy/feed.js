import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right, Thumbnail } from 'native-base';
import { iOSUIKit } from 'react-native-typography';

import { Actions } from 'react-native-router-flux';
import Textarea from 'react-native-textarea';
import Head from './CommonHeader';

export default class Feed extends Component {
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
                <Head />
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

                    <Text style={iOSUIKit.title3Emphasized}> <Text style={{ textDecorationLine: 'underline' }}>FEEDBACK</Text> </Text>

                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <View style={{ backgroundColor: '#D5D8DC', height: 80, marginTop: 15, width: 300, borderRadius: 10, elevation: 1, flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly'  }}>
                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 65, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wo1RO4BGFUyVOx47Vnedhnp0iVPRRm99BsIm8eoynvCfmlb8&s' }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 17 }}>Gurmeet Singh</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Computer Science(Batch-07)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Data Structure</Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                {/* <Image style={{ height: 40, width: 40, resizeMode: 'contain', tintColor: '#fff' }}
                                source={require('./Images/enter.png')}
                            /> */}
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/favorite.png')}
                                />
                            </Button>
                            <Button transparent>
                                <Image style={{ height: 40, width: 25, resizeMode: 'contain', marginLeft: 3 }}
                                    source={require('./Images/star.png')}
                                />
                            </Button>
                        </View>

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
        marginBottom: 200
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
        width: 300,
        height: 50,
        margin: 5,
        backgroundColor: '#D5D8DC',
        borderColor: 'grey',
        borderWidth: 1.5,
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
        height: 250,
        padding: 5,
        width:300,
        backgroundColor: '#D5D8DC',
        marginTop: 20,
        borderRadius:10
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
});
