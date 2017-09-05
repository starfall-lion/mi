import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image,} from 'react-native';

import * as Screen from '../../utils/ScreenUtils';

export default class MineScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '个人中心',
        headerTitleStyle: {fontSize: Screen.getFontSize(28), alignSelf: 'center'},
        headerStyle: {backgroundColor: '#0496fc'},
        headerTintColor: '#ffffff',
    });

    render() {
        return (
            <View>
                <Text>个人中心</Text>
            </View>
        )
    }
}