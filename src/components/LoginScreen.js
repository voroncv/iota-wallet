import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Image from 'react-native-remote-svg';
import ls from 'react-native-local-storage';

import Loader from './layouts/Loader';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seed: '',
            isLoader: false
        };

        this.checkSeed = this.checkSeed.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    checkSeed() {
        if (this.state.seed === '') {
            return Alert.alert('Enter SEED')
        } else {
            this.setState({ isLoader: true });
            return fetch('http://localhost:3000/getAccountData', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    seed: this.state.seed,
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ isLoader: false });
                if (responseJson.isError) {
                    return Alert.alert(responseJson.message);
                } else {
                    ls.save('IOTASeed', this.state.seed).then(() => {
                        return this.props.navigation.push('Wallet');
                    });
                }
            })
            .catch((error) => {
                this.setState({ isLoader: false });
                return Alert.alert('ERROR')
            });
        }
    }

    render() {
        if (this.state.isLoader) {
            return (
                <Loader />
            );
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <View style={{ paddingBottom: 50 }}>
                    <Image
                        source={require('../assets/images/iota_logo.svg')}
                        style={styles.logo}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="SEED"
                        placeholderTextColor="#000000"
                        style={{height: 40, borderColor: '#000000', borderWidth: 1, width: wp(80), paddingLeft: 10, paddingRight: 10, marginBottom: 10}}
                        onChangeText={(seed) => this.setState({seed})}
                        value={this.state.seed}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.checkSeed}
                    >
                        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Log in to the wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: wp(80),
        height: wp(40),
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10
    },
});