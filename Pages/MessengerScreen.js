import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import {GiftedChat} from 'react-native-gifted-chat';

import { Actions } from 'react-native-router-flux';


export default class MessengerScreen extends Component{
    state = {
      messages: [],
    };
    render() {
        return(
            <GiftedChat
                messages={this.state.message}
                onSend={()=> {
                    // to backend
                }}
                user={{
                    _id:1,
                }}
            />
        )
    }
}

MessengerScreen.defaultProps = {
    name: 'User',
};

MessengerScreen.propTypes = {
    name: PropTypes.string
};

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