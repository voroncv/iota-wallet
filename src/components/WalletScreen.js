import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import SideMenu from 'react-native-side-menu';
import ls from 'react-native-local-storage';

import Navbar from './layouts/Navbar';
import Balance from './layouts/Balance';
import Send from './layouts/Send';
import Receive from './layouts/Receive';
import History from './layouts/History';
import LeftMenu from './layouts/LeftMenu';
import Loader from './layouts/Loader';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenLeftMenu: false,
            isLoader: false,
            accountBalance: 0
        };

        this.logout = this.logout.bind(this);
        this.openPage = this.openPage.bind(this);
        this.openLeftMenu = this.openLeftMenu.bind(this);
    }

    static navigationOptions = {
        header: null,
        headerLeft: null,
        gesturesEnabled: false,
    };

    componentWillMount() {
        this.getAccountData();
    }

    getAccountData() {
        this.setState({
            isLoader: true
        });

        ls.get('IOTASeed').then((result) => {
            if (result === null) {
                ls.remove('IOTASeed').then(() => {
                    return this.props.navigation.navigate('Login');
                });
            } else {
                fetch('http://localhost:3000/getAccountData', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        seed: result,
                    }),
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.isError) {
                        return ls.remove('IOTASeed').then(() => {
                            this.props.navigation.navigate('Login');
                        });
                    } else {
                        return this.setState({
                            isLoader: false,
                            accountBalance: responseJson.balance
                        });
                        return this.convertUnits(responseJson.balance);
                    }
                })
                .catch((error) => {
                    this.setState({ isLoader: false });
                    return Alert.alert('ERROR')
                });
            }
        });
    }

    convertUnits(value) {
        fetch('http://localhost:3000/getAccountData', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: value,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoader: false,
                accountBalance: responseJson
            });
        })
        .catch((error) => {
            this.setState({ isLoader: false });
            return Alert.alert('ERROR')
        });
    }

    logout() {
        ls.remove('IOTASeed').then(() => {
            return this.props.navigation.navigate('Login');
        });
    }

    openPage(e) {
        this.props.navigation.navigate(e);
    }

    openLeftMenu() {
        this.setState({
            isOpenLeftMenu: true
        })
    }

    render() {
        if (this.state.isLoader) {
            return (
                <Loader />
            );
        }

        return (
            <SideMenu
                menu={<LeftMenu logout={this.logout} />}
                isOpen={this.state.isOpenLeftMenu}
            >
                <View style={styles.container}>
                    <Navbar
                        logout={this.logout}
                        openLeftMenu={this.openLeftMenu}
                    />
                    <Balance accountBalance={this.state.accountBalance} />
                    <Send openPage={this.openPage} />
                    <Receive openPage={this.openPage} />
                    <History openPage={this.openPage} />
                </View>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});