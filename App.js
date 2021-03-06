import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ls from 'react-native-local-storage';

import { NavigatorIOS, YellowBox, Alert } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import LoginScreen from './src/components/LoginScreen';
import WalletScreen from './src/components/WalletScreen';
import ReceiveScreen from './src/components/ReceiveScreen';
import SendScreen from './src/components/SendScreen';
import HistoryScreen from './src/components/HistoryScreen';

const initialRouteName = () => {
    return 'Wallet';
    ls.get('IOTASeed').then((result) => {
        if (result !== null) {
            return 'Wallet';
        } else {
            return 'Login';
        }
    });
}

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 0
    }
  }
}

const RootStack = createStackNavigator({
    Login: { screen: LoginScreen },
    Wallet: { screen: WalletScreen },
    Receive: { screen: ReceiveScreen },
    Send: { screen: SendScreen },
    History: { screen: HistoryScreen },
}, {
    initialRouteName: initialRouteName(),
    transitionConfig,
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
