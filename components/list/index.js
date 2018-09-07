/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {signIn, signOut, getToken} from './components/util'
import {Router, Scene, Tabs, Stack, TabView} from "react-native-router-flux";


type Props = {};
class List extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }
    }

    // TODO refactor this return !!!
    render() {
        return (
           <View>

           </View>
        );
    }
}

const styles = StyleSheet.create({});

export default