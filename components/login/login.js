import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text, TextInput, TouchableHighlight,
    View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import jsonToUrlEncoded from '../../services/login/index';

class Login extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            username: '',
        };
    }


    handleInputChange = (field, value) => {
        const newState = {
            ...this.state,
            [field]: value,
        };
        this.setState(newState);
    };

    submit = () => {
        return fetch(`http://antifake.dev.compaero.ru/user/login`, {
            method: 'POST',
            credentials: 'include',
            mode: 'no-cors',
            headers: {
                Accept: 'text/html,application/xhtml+xml,application/xml',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: jsonToUrlEncoded({
                uname:this.state.username,
                ups:this.state.password
            })
        })
            .then((response)=> {
                if (response.status === 200) {
                    let token = response.headers.map['set-cookie'];
                    return this.props.screenProps.changeLoginState(true, token);
                }
            })
            .catch(e => console.error(e))

    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('username', value)}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('password', value)}
                    placeholder="Password"
                />
                <TouchableHighlight >
                    <Text
                        style={[styles.button, styles.blueButton]}
                        onPress={() => this.submit()}
                    >
                        Sign Up
                    </Text>
                </TouchableHighlight>
                <Text
                    style={styles.signButton}
                    onPress={() => Actions.SignUp()}
                >Sign In</Text>
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
    blueButton: {
        backgroundColor: '#2E9AFE'
    },
    signButton: {
        color: '#2E9AFE',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    input: {
        marginBottom: 10,
        marginTop: 10,
        height: 60,
        fontSize: 20,
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;