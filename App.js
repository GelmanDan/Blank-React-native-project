/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FirstScreen from './Pages/FirstScreen';
import MessengerScreen from './Pages/MessengerScreen';
import Settings from './Pages/Settings';

import {Router, Scene} from 'react-native-router-flux';


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

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key="root" tabs={true}>
                    <Scene key="tab1" title="Calculator" icon={TabIcon}>
                        <Scene
                            key="first"
                            component={FirstScreen}
                            title="Calculator"
                            initial
                        />
                    </Scene>
                    <Scene key="tab2" title="Messanger" icon={TabIcon}>
                        <Scene
                            key="first"
                            component={FirstScreen}
                            title="first"
                        />
                        <Scene
                            key="messanger"
                            component={MessengerScreen}
                            title="Messanger"
                            initial
                        />
                    </Scene>
                    <Scene key="tab3" title="Setttings" icon={TabIcon}>
                        <Scene
                            key="settings"
                            component={Settings}
                            title="Settings"
                            initial
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
