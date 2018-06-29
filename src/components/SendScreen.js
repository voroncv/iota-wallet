import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class SendScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientAddress: '',
            count: '',
            isOpenDropDown: false
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    static navigationOptions = {
        title: 'Send',
        headerTitleStyle: {
            color: '#FFFFFF'
        },
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#FFFFFF',
    };

    toggleDropDown() {
        this.setState({
            isOpenDropDown: !this.state.isOpenDropDown
        });
    }

    render() {
        let isOpenDropDown = this.state.isOpenDropDown === true ? 1 : 0;
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={{ zIndex: 1 }}>
                    <TextInput
                        placeholder="Address of the recipient"
                        placeholderTextColor="#FFFFFF"
                        style={{height: 40, borderWidth: 1, width: wp(90), marginBottom: 20, padding: 6, color: '#FFFFFF', borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', fontSize: 16 }}
                        onChangeText={(recipientAddress) => this.setState({recipientAddress})}
                        value={this.state.recipientAddress}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            placeholder="Count"
                            placeholderTextColor="#FFFFFF"
                            style={{height: 40, borderWidth: 1, width: wp(60), marginBottom: 20, padding: 6, color: '#FFFFFF', borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', fontSize: 16 }}
                            onChangeText={(count) => this.setState({count})}
                            value={this.state.count}
                        />
                        <TouchableOpacity style={{height: 40, borderWidth: 1, width: wp(20), marginBottom: 20, padding: 6, borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
                            onPress={this.toggleDropDown}
                        >
                            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>i</Text>
                            <Image
                                    source={require('../assets/images/down_arrow.svg')}
                                    style={{ width: 20, height: 20, position: 'absolute', left: 15, top: 5 }}
                                />
                            <View
                                style={{ width: wp(20), position: 'absolute', top: 50, borderRadius: 6, opacity: isOpenDropDown }}
                            >
                                <TouchableOpacity style={{ width: wp(20), height: 40, backgroundColor: '#FFB74D', borderTopLeftRadius: 6, borderTopRightRadius: 6, paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 26 }}>i</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp(20), height: 40, backgroundColor: '#FFA726', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Ki</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp(20), height: 40, backgroundColor: '#FF9800', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Mi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp(20), height: 40, backgroundColor: '#FB8C00', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Gi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp(20), height: 40, backgroundColor: '#F57C00', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Ti</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ backgroundColor: '#3b2a7a', width: wp(100), padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 24 }}>Send now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#009688',
        paddingTop: 20
    },
});