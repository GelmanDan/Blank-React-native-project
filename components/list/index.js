/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

import {signIn, signOut, getToken} from '../../components/util'
import {Scene, Tabs, Stack, TabView} from "react-native-router-flux";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import jsonToUrlEncoded from '../../services/login/index';

const LIST_ITEMS = gql`query{
  userList{
    name,
    username,
    password,
    email,
  }
}`;

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
            <Query query={LIST_ITEMS}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading...</Text>;
                    if (error) return <Text>{error}</Text>;

                    return (
                        <FlatList
                            data={[{key: 'a'}, {key: 'b'}]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                        />
                    )
                }}
            </Query>
        );
    }
}

const styles = StyleSheet.create({});

export default List;