import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Text, Image, StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
//插件：ScrollableTabView
import * as Screen from '../../utils/ScreenUtils';
import KeysRepository, {FLAG} from '../../utils/KeysRepository';

export default class InformationScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '网络资讯',
        headerTitleStyle: {fontSize: Screen.getFontSize(28), alignSelf: 'center'},
        headerStyle: {backgroundColor: '#0496fc'},
        headerTintColor: '#ffffff',
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Custom', {flag: FLAG.flag_information, title: '网络资讯'});
                }}>
                <Image style={{width: Screen.toDips(40), height: Screen.toDips(30), marginRight: Screen.toDips(20)}}
                       tintColor="#ffffff" source={require('../../images/more.png')}></Image>
            </TouchableOpacity>
        ),
    });

    constructor(props) {
        super(props);

        this.state = {
            keyList: [],
            refresh: false,
        }
    }

    componentDidMount() {
        this.keys = new KeysRepository(FLAG.flag_information);
        this._requestData();
    }

    componentWillMount() {

        // console.log(this.state.keyList);
    }


    _requestData() {
        this.keys.fetch().then((data) => {
            let dataList = data.map(
                (info) => {
                    return {
                        id: info.id,
                        name: info.name,
                        path: info.path,
                        checked: info.checked,
                    }
                });
            console.log(dataList);
            this.setState({
                keyList: dataList,
                refresh: true,
            })
        }).catch((err) => {
            console.log(err);
        })
    }


    _renderItemSeparatorComponent() {
        return (
            <View style={styles.line}>

            </View>
        )
    }

    _renderFooterComponent() {
        return (
            <Text style={styles.footer}>加载更多</Text>
        )
    }

    _onRefresh() {
        this._requestData();
        this.setState({
            refresh: false
        })
    }

    _onEndReached() {
        this._requestData();
        this.setState({
            refresh: false
        })
    }

    _renderItemComponent() {

    }

    render() {
        // this.keys = new KeysRepository(FLAG.flag_information);
        // this._requestData();
        return (
            this.state.keyList.length > 0 &&
            <ScrollableTabView
                tabBarUnderlineColor='#ffffff'
                tabBarInactiveTextColor='mintcream'
                tabBarActiveTextColor='white'
                tabBarBackgroundColor='#0496fc'
                ref="scrollableTabView"
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar style={{height: 40, borderWidth: 0, elevation: 2}}
                                                      tabStyle={{height: 40}}
                                                      underlineHeight={2}/>}
            >
                {this.state.keyList.map((data, index) => {

                    return data.checked ? <View tabLabel={data.name} key={index}></View>:null;
                    // <FlatList tabLabel={data.name}
                    // key={index}
                    // ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    // ListFooterComponent={this._renderFooterComponent}
                    // data={filteredData}
                    // onEndReached={this._onEndReached}
                    // onRefresh={this._onRefresh}
                    // refreshing={this.state.refresh}
                    // renderItem={this._renderItemComponent}
                    // />
                })}
                {/*<View tabLabel='111'><Text>11</Text></View>*/}
                {/*<View tabLabel='123'><Text>11</Text></View>*/}
                {/*<View tabLabel='134'><Text>11</Text></View>*/}
            </ScrollableTabView>




        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    line: {
        height: Screen.toDips(2),
        backgroundColor: '#6c6c6c',
    },
    footer: {
        textAlign: 'center',
        fontSize: Screen.getFontSize(16),
    }
})