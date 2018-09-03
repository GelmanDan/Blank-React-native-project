/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";

import Routes from './components/router/routes';
import Login from './components/login/login';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
};

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://antifake.dev.compaero.ru/graphql' }),
    cache: new InMemoryCache()
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }
    }

    handleChangeLoginState = (loggedIn = false) => {
        this.setState({ loggedIn })
    };

    render() {
        console.log(client);
        return (
            <ApolloProvider client={client}>
                {this.state.loggedIn ?
                    <Routes/>:
                    <Login/>
                }
            </ApolloProvider>

        );
    }
}

const styles = StyleSheet.create({

});
