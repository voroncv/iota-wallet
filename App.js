import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { NavigatorIOS, YellowBox, Alert } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import LoginScreen from './src/components/LoginScreen';
import WalletScreen from './src/components/WalletScreen';

const RootStack = createStackNavigator({
    Login: { screen: LoginScreen },
    Wallet: { screen: WalletScreen }
}, {
    initialRouteName: 'Login'
}, {
    transitionConfig: () => ({
        screenInterpolator: () => null
    }),
});

export default class App extends React.Component {
    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <RootStack />
        );
    }
}
