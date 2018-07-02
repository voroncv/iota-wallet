import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import SideMenu from 'react-native-side-menu';

import Navbar from './layouts/Navbar';
import Balance from './layouts/Balance';
import Send from './layouts/Send';
import Receive from './layouts/Receive';
import History from './layouts/History';
import LeftMenu from './layouts/LeftMenu';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenLeftMenu: false
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

    logout() {
        this.props.navigation.navigate('Login');
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
        return (
            <SideMenu
                menu={<LeftMenu />}
                isOpen={this.state.isOpenLeftMenu}
            >
                <View style={styles.container}>
                    <Navbar
                        logout={this.logout}
                        openLeftMenu={this.openLeftMenu}
                    />
                    <Balance />
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