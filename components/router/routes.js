import {Component} from "react";
import {Router, Scene} from "react-native-router-flux";
import FirstScreen from "../../Pages/FirstScreen";
import MessengerScreen from "../../Pages/MessengerScreen";
import Settings from "../../Pages/Settings";
import React from "react";
import {Text} from "react-native";

const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
};

export default class Routes extends Component<Props> {
    render() {
        return (
            <Router>
                <Scene key="root" tabs={true}>
                    <Scene key="Calculator" title="Calculator" icon={TabIcon}>
                        <Scene
                            key="first"
                            component={FirstScreen}
                            title="Calculator"
                            initial
                        />
                    </Scene>
                    <Scene key="Messanger" title="Messanger" icon={TabIcon}>
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
                    <Scene key="settings" title="Setttings" icon={TabIcon}>
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