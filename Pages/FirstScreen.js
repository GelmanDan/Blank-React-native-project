import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.nav}
                onPress={() => Actions.messanger()}
            >
                First
            </Text>
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
    nav: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
    }
});

export default FirstScreen;