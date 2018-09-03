import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableHighlight,
} from 'react-native';



import { Actions } from 'react-native-router-flux';

function addChar(input, character) {
    alert(character);
}

export default class Register extends Component<Props> {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            emailError: false,
            password: '',
            passwordError: false,
            confirmPassword: '',
            confirmPasswordError: false,
        };
    }
    render() {
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
                <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                />
                <TouchableHighlight >
                    <Text style={[styles.button, styles.greenButton]}>Create account</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
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
    greenButton: {
        backgroundColor: '#4CD964'
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