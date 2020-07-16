import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right, Thumbnail } from 'native-base';
import { iOSUIKit } from 'react-native-typography';

import { Actions } from 'react-native-router-flux';
import SearchField from "react-search-field";
import Head from './CommonHeader';
export default class Faculty extends Component {
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
                <View style={styles.SectionStyle}>
                    {/* <Icon name='user' size={20} color='#00aff0' /> */}
                    <Image style={{ height: 15, width: 20, resizeMode: 'contain', marginLeft: 20 }}
                        source={require('./Images/search.png')}
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Search"
                        selectionColor='#EF2E2F'
                        onChangeText={(value) => this.setState({ phone: value })} />
                </View>
                <ScrollView keyboardShouldPersistTaps={'always'}>
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



                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wo1RO4BGFUyVOx47Vnedhnp0iVPRRm99BsIm8eoynvCfmlb8&s'}}/>
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Vinay Sharma</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mechanical Branch(Batch-04)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Thermodynamics</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2 ,marginRight:8}}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>
                        {/* 2 */}
                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1VYhswxpF0lSsmQEMil2bjlmvjCWpYj0hCbl8fgWqzcabFNh&s'}} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Sanjay Gupta</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Electronics Branch(Batch-08)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Micro-Processor</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2,marginRight:8 }}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>

                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJFy48r5aBX9-F_n0hFEdIJFaGyOhcsow83WpVDlseVOeclU6&s'}} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Gurmeet Singh</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mechanical Branch(Batch-02)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mathematics</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2,marginRight:8 }}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>

                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                    source={{ uri: 'data:image/jpeg;base64,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' }}                               />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Mohit Rana</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Computer Science(Batch-06)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>C++ programming</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2,marginRight:8 }}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>

                       

                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvWXrEGxeRosp_fh7aFE2lVoMwfGUy0F0ngk5yPM-4ch-xWB1&s'}}  />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Vishal kori</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mechanical Branch(Batch-04)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Statics and dynamics.</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2,marginRight:8 }}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>

                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eFOJDG89tYa4lZyCLNzykIIqILNMyPAQwfaXfiCDVsarOpemSA&s'}}                               />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Vivek Bharti</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mechanical Branch(Batch-01)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Basic physical sciences</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2 ,marginRight:8}}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>

                        <View style={{ height: 70, margin: 4, width: 300, borderRadius: 10, elevation: 3, backgroundColor: '#D5D8DC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <View style={{ marginRight: 20 }}>
                                <Thumbnail style={{ height: 60, width: 70, resizeMode: 'contain', borderRadius: 100 }}
                                     source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_AMhmx2EhX8z9p6uKTs_Zxnq-t-BwLqOVoedSmzKAv40eaIz&s'}} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 17 }}>Deepak Sir</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Mechanical Branch(Batch-09)</Text>
                                <Text style={{ fontSize: 12, marginTop: 2 }}>Thermodynamics</Text>
                            </View>

                            <Button onPress={() => Actions.feed()} transparent style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: 30, width: 40, resizeMode: 'contain', tintColor: '#E60E0F' }}
                                    source={require('./Images/enter.png')}
                                />
                                <Text style={{ fontSize: 8, marginTop: 2,marginRight:8 }}>GIVE FEEDBACK</Text>
                            </Button>

                        </View>





                    </View>
                </ScrollView>
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
        // marginBottom: 270,
    },
    textinput: {
        fontSize: 15,
        paddingHorizontal: 20,
        // marginTop: 15,
        width: 270,
        // padding: 1,
        // marginVertical: 12
        // backgroundColor:'red'

    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300,
        height: 39,
        margin: 30,
        backgroundColor: '#D5D8DC',
        // borderColor: 'grey',
        // borderWidth: 1,
        // marginLeft: 55,
        borderRadius: 20,
        marginTop: 80

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
