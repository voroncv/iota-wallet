import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Navbar from './layouts/Navbar';
import Balance from './layouts/Balance';
import Send from './layouts/Send';
import Receive from './layouts/Receive';
import History from './layouts/History';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.logout = this.logout.bind(this);
        this.openPage = this.openPage.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    logout() {
        this.props.navigation.navigate('Login');
    }

    openPage(e) {
        this.props.navigation.navigate(e);
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar logout={this.logout} />
                <Balance />
                <Send openPage={this.openPage} />
                <Receive openPage={this.openPage} />
                <History openPage={this.openPage} />
            </View>
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