//adb connect 127.0.0.1:21503
import React, {Component} from 'react';
import {View} from 'react-native';

import Index from './src/screens/Index';
//插件：react-native-splash-screen
import SplashScreen from 'react-native-splash-screen';


export default class app extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Index/>
        )
    }
}