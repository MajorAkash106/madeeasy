import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, YellowBox, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Title, Body, Button, Left, Right } from 'native-base';


export default class Head extends Component {
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
                <Header style={{ backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent>
                            <Image style={{ height: 25, width: 40, resizeMode: 'contain', }}
                                source={require('./Images/menu.png')}
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Image style={{ height: 200, width: 200, resizeMode: 'contain' }}
                                source={require('./Images/logo2.jpg')}
                            />
                    </Body>
                    
                    <Right>
                        <Button transparent>
                        <Image style={{ height: 18, width: 40, resizeMode: 'contain' }}
                            source={require('./Images/menuu.png')}
                        />
                        </Button>
                        
                    </Right>

                </Header>


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
