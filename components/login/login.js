import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

function addChar(input, character) {
    alert(character);
}

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>XER TEBE</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    number: {
        margin: 5,
        padding: 10,
        paddingLeft:15,
        paddingRight: 15,
        fontSize: 16,
        backgroundColor: 'white',
    },
    nav: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    }
});

export default Login;