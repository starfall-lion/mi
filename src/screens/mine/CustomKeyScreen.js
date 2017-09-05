import React, {Component} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image, Alert, StyleSheet} from 'react-native';

//插件：https://github.com/sconxu/react-native-checkbox/
import CheckBox from 'react-native-check-box';

import * as Screen from '../../utils/ScreenUtils';
import ArrayUtils from '../../utils/ArrayUtils';
import KeysRepository from '../../utils/KeysRepository';

let that;
export default class CustomKeyScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: `定制${navigation.state.params.title}栏目`,
        headerTitleStyle: {fontSize: Screen.getFontSize(28), alignSelf: 'center'},
        headerStyle: {backgroundColor: '#0496fc'},
        headerTintColor: '#ffffff',
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    that._saveData();
                }}>
                <Text style={{
                    width: Screen.toDips(80),
                    height: Screen.toDips(40),
                    marginRight: Screen.toDips(5),
                    color: '#ffffff'
                }}>保存</Text>
            </TouchableOpacity>
        )
    })

    constructor(props) {
        super(props);
        this.dataArrayChanged = [];
        this.state = {
            dataArray: [],

        }
        that = this;
    }

    componentDidMount() {
        this.keys = new KeysRepository(this.props.navigation.state.params.flag);
        this._requestData();
    }

    _saveData() {
        if (this.keys.check(this.state.dataArray)) {
            this.keys.save(this.state.dataArray);
            Alert.alert("标题", "保存成功！");
        } else {
            Alert.alert("标题", "至少订阅一个栏目！");
        }
    }

    _requestData() {
        this.keys.fetch().then((data) => {
            this.setState({
                dataArray: data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    _renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) return;
        let len = this.state.dataArray.length;
        var views = [];
        for (let i = 0; i < len; i++) {
            views.push(
                <View key={i}>
                    <View style={styles.checkbox}>
                        {this._renderCheckBox(this.state.dataArray[i])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        return views;
    }

    _renderCheckBox(data) {
        // console.log(data);
        let leftText = data.name;
        let isChecked = data.checked;
        return (
            <CheckBox
                onClick={() => {
                    this._onClickCheckBox(data);
                }}

                leftText={leftText}
                isChecked={isChecked}
                checkedImage={<Image source={require('../../images/check_box_checked.png')} tintColor='#0496fc'/>}
                unCheckedImage={<Image source={require('../../images/check_box_unchecked.png')} tintColor='#0496fc'/>}
            />
        )
    }

    _onClickCheckBox(data) {
        data.checked = !data.checked;
        ArrayUtils.updateArray(this.dataArrayChanged, data);
    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this._renderView()}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff'
    },
    checkbox: {
        padding: Screen.toDips(10),
        width: Screen.screenWidth() / 2,
    },
    line: {
        flex: 1,
        height: 0.5,
        backgroundColor: 'darkgray',
    }
})