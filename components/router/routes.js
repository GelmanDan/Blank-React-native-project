import {Component} from "react";
import FirstScreen from "../../Pages/FirstScreen";
import MessengerScreen from "../../Pages/MessengerScreen";
import Login from '../../components/login/login';
import Register from '../../components/login/register';
import List from '../../components/list/index';

import React from "react";
import {Router, Scene, Tabs, Stack, TabView} from "react-native-router-flux";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-client-preset";
import {signIn, signOut, getToken} from '../../components/util'


const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
};

export default class RoutesIn extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }
    }

    async componentWillMount() {
        const token = await getToken();
        if (token) {
            this.setState({loggedIn: true});
        }
    }

    handleChangeLoginState = (loggedIn = false, jwt) => {
        this.setState({loggedIn});
        if (loggedIn) {
            signIn(jwt);
        } else {
            signOut();
        }
    };
    handleSubmit = () => {
        this.handleChangeLoginState(false,'');
    };

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    {this.state.loggedIn ?
                        <Tabs
                            key="tabbar"
                            routeName="tabbar"
                            backToInitial
                            swipeEnabled
                            showLabel={false}
                            tabBarStyle={styles.tabBarStyle}
                            activeBackgroundColor="white"
                            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                        >
                            <Stack
                                key="tab_1"
                                title="Tab #1"
                                tabBarLabel="TAB #1"
                                inactiveBackgroundColor="#FFF"
                                activeBackgroundColor="#DDD"
                                icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: 'blue' }}
                                titleStyle={{ color: 'white', alignSelf: 'center' }}
                            >
                                <Scene key="tab_1_1" component={MessengerScreen} title="Tab #1_1" onRight={() => this.handleSubmit()} rightTitle="Log out" />

                            </Stack>

                            <Stack key="tab_2" title="Tab #2" icon={TabIcon} >
                                <Scene key="tab_1_1" component={MessengerScreen} title="Tab #2_1" onRight={() => alert('Right button')} rightTitle="Right" />
                            </Stack>
                            <Stack key="tab_3" icon={TabIcon} title="Tab #3" initial>
                                <Scene key="tab_1_1" component={MessengerScreen} title="Tab #3_1" onRight={() => alert('Right button')} rightTitle="Right" />
                            </Stack>
                            <Scene key="tab_4_1" component={MessengerScreen} title="Tab #4" hideNavBar icon={TabIcon} />
                            <Stack key="tab_5" icon={TabIcon} title="Tab #5">
                                <Scene key="tab_1_1" component={List} title="Tab #5_1" onRight={() => alert('Right button')} rightTitle="Right" />
                            </Stack>
                        </Tabs>:
                        <Stack >
                            <Scene key="SignIn" title="Login" component={Login} screenProps={{changeLoginState: this.handleChangeLoginState}}/>
                            <Scene key="SignUp" title="Login" component={Register} screenProps={{changeLoginState: this.handleChangeLoginState}}/>
                        </Stack>
                    }
                </Scene>
            </Router>
        );
    }
}
const styles = StyleSheet.create({});