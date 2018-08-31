import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Settings extends Component {
    state = {
        name: '',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Enter your name
                </Text>
                <TextInput
                    placeholder={'John'}
                    style={styles.input}
                    onChangeText={(value)=>{
                        this.setState({
                            name: value,
                        })
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        console.log(this.state.name);
                    }}
                >
                    <Text style={styles.button}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
    nav: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    header: {
        fontSize: 18,
        textAlign: 'left',
        margin: 10,
        color: '#000000',
    },
    button: {
        color: '#FFFFFF',
        fontSize: 16,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'darkgrey',
        padding: 5,
        marginTop: '5%',
        width: '20%',
    }
});