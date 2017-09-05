import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import * as Screen from '../../utils/ScreenUtils';
import {FLAG} from '../../utils/KeysRepository';

export default class AuthorityScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '权威发布',
        headerTitleStyle: {fontSize: Screen.getFontSize(28), alignSelf: 'center'},
        headerStyle: {backgroundColor: '#0496fc'},
        headerTintColor: '#ffffff',
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Custom', {flag: FLAG.flag_authority, title: '权威发布'});
                }}>
                <Image style={{width: Screen.toDips(40), height: Screen.toDips(30), marginRight: Screen.toDips(20)}}
                       tintColor="#ffffff" source={require('../../images/more.png')}></Image>
            </TouchableOpacity>
        ),
    })

    render() {
        return (
            <View>
                <Text>主页</Text>
            </View>
        )
    }
}