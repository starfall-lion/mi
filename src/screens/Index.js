import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom,} from 'react-navigation';

import AuthorityScreen from './authority/AuthorityScreen';
import InformationScreen from './information/InformationScreen';
import MineScreen from './mine/MineScreen';
import CustomKeyScreen from './mine/CustomKeyScreen';
import TabBarItem from '../components/TabBarItem';
export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator/>
        )
    }
}
const Tab = TabNavigator({
        information: {
            screen: InformationScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '网络资讯',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabbar_information.png')}
                        selectedImage={require('../images/tabbar_information.png')}
                    />
                )
            }),
        },
        authority: {
            screen: AuthorityScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '权威发布',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabbar_authority.png')}
                        selectedImage={require('../images/tabbar_authority.png')}
                    />
                )
            }),
        },
        mine: {
            screen: MineScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '个人中心',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabbar_mine.png')}
                        selectedImage={require('../images/tabbar_mine.png')}
                    />
                )
            }),
        },
    },
    {
        initialRouteName: 'authority',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#067bff',
            inactiveTintColor: '#6c6c6c',
            style: {backgroundColor: '#dedede'}
        }
    }
);

const Navigator = new StackNavigator(
    {
        Tab: {screen: Tab},
        Custom:{screen:CustomKeyScreen},
    },
);