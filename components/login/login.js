import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text, TextInput, TouchableHighlight,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TouchableHighlight >
                <Text style={[styles.button, styles.blueButton]}>Sign Up</Text>
            </TouchableHighlight>
            <Text
                style={styles.signButton}
                onPress={() => Actions.SignUp()}
            >Sign In</Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        borderRadius: 4,
        padding: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff'
    },
    blueButton: {
        backgroundColor: '#2E9AFE'
    },
    signButton: {
        color: '#2E9AFE',
        marginBottom:10,
        marginTop: 10,
        textAlign: 'center',
    },
    input: {
        marginBottom:10,
        marginTop: 10,
        height: 60,
        fontSize:20,
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;