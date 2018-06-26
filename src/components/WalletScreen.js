import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Navbar from './layouts/Navbar';
import Balance from './layouts/Balance';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.logout = this.logout.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    logout() {
        this.props.navigation.push('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar logout={this.logout} />
                <Balance />
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