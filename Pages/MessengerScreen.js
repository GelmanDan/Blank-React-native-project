import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const MessengerScreen = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.nav}
                onPress={() => Actions.first()}
            >
                Second
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    nav: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    }
});

export default MessengerScreen;