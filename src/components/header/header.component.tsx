import React, { Component } from 'react';
import { Header } from 'react-native-elements';

export default class CustomHeader extends Component {
    render() {
        return (
            <Header
                leftComponent={{ icon: 'list', color: '#fff' }}
                centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}