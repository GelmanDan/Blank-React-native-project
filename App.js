/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {ApolloClient, HttpLink, InMemoryCache} from "apollo-client-preset";
import {ApolloProvider} from "react-apollo";

import {TabView} from "react-native-router-flux";
import Routes from "./components/router/routes";

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://antifake.dev.compaero.ru/graphql'}),
    cache: new InMemoryCache()
});

export default class App extends Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                <Routes/>
            </ApolloProvider>
        );
    }
}
