import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import {Actions} from 'react-native-router-flux';

class Register extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailError: false,
            password: '',
            passwordError: false,
            confirmPassword: '',
            confirmPasswordError: false,
            role:'test',
            username: '',
            usernameError: false,
            name:'',
            nameError: false,
        };
    }

    handleInputChange = (field, value) => {
        const newState = {
            ...this.state,
            [field]: value,
        };
        this.setState(newState);
    };

    handleSubmit = () => {
        const { name, username, email, password, confirmPassword } = this.state;
        if (email.length === 0) {
            return this.setState({ emailError: true });
        }
        this.setState({ emailError: false });

        if (password.length === 0) {
            return this.setState({ passwordError: true });
        }
        this.setState({ passwordError: false });

        if (confirmPassword.length === 0) {
            return this.setState({ confirmPasswordError: true });
        }
        this.setState({ confirmPasswordError: false });

        if (password !== confirmPassword) {
            return this.setState({ passwordError: true, confirmPasswordError: true });
        }
        this.setState({ passwordError: false, confirmPasswordError: false });

        if (username.length === 0) {
            return this.setState({usernameError: true});
        }
        this.setState({usernameError: false});

        if (name.length === 0) {
            return this.setState({nameError: true});
        }
        this.setState({nameError: false});

        this.props
            .signup(email, password)
            .then(({ data }) => {
                return this.props.screenProps.changeLoginState(true, data.signup.jwt);
            })
            .catch(e => {
                // If the error message contains email or password we'll assume that's the error.
                if (/email/i.test(e.message)) {
                    this.setState({ emailError: true });
                }
                if (/password/i.test(e.message)) {
                    this.setState({ passwordError: true });
                }
            });

        return this.props.screenProps.changeLoginState(true);
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('name', value)}
                    keyboardType="email-address"
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('username', value)}
                    keyboardType="email-address"
                    placeholder="Username"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('email', value)}
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={value => this.handleInputChange('password', value)}
                    keyboardType="visible-password"
                    placeholder="Password"
                />
                <TextInput
                    style={styles.input}
                    keyboardType="visible-password"
                    onChangeText={value => this.handleInputChange('confirmPassword', value)}
                    placeholder="Confirm password"
                />
                <TouchableHighlight onPress={this.handleSubmit}>
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

export default graphql(
    gql`
    mutation{
        createUser(username:"ivan1",name:"ivan1",email:"ivan@ivan.ivan",password:"123321",role:"test"){
            name,
            username,
            password,
            email,
            role,
          }
        }   
    `,
    {
        props: ({ mutate }) => ({
            signup: (name, username, password, email, role) => mutate({ variables: { name, username, password, email, role } }),
        }),
    },
)(Register);