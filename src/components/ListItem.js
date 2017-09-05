import React, {Component} from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

import * as Screen from '../../utils/Screen';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            refresh: false,
        }
    }

    _keyExtractor(item, index) {
        return index;
    }

    __requestData() {

    }

    _renderFooter() {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>加载更多</Text>
            </View>
        )
    }

    _renderItemSeparator() {

    }

    _renderItem(info, navigation) {

    }

    _onEndReached() {

    }

    render() {
        return (

            <View>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={this._keyExtractor}
                    onRefresh={this._requestData}
                    refreshing={this.state.refreshing}
                    ListFooterComponent={this._renderFooter}
                    ItemSeparatorComponent={this._renderItemSeparator}
                    renderItem={(info) => this._renderItem(info, navigation)}
                    initialNumToRender='8'
                    onEndReachedThreshold={1}
                    onEndReached={this._onEndReached}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Screen.toDips(10),
        backgroundColor: '#ffffff',
    },
    itemContainer: {
        marginTop: Screen.toDips(10),
        marginBottom: Screen.toDips(10),
        flex: 1,
        flexDirection: 'row',
    },
    itemLeft: {
        flexDirection: 'column',
        width: Screen.screenWidth() * 8 / 10,
        marginLeft: Screen.toDips(20),
        marginRight: Screen.toDips(10),

    },
    itemRight: {
        width: Screen.screenWidth() * 1.5 / 10,
        marginRight: Screen.toDips(30)
    },
    itemTitle: {
        marginTop: Screen.toDips(5),
        paddingRight: Screen.toDips(5),
        fontSize: Screen.getFontSize(24),
        color: '#484848',
    },
    itemDescription: {
        marginTop: Screen.toDips(10),
        paddingRight: Screen.toDips(10),
        fontSize: Screen.getFontSize(18),
        color: '#6c6c6c',
    },
    itemInfo: {
        marginTop: Screen.toDips(10),
        flexDirection: 'row',
    },
    itemAuthor: {
        fontSize: Screen.getFontSize(18),
        color: '#484848',
    },
    itemDate: {
        fontSize: Screen.getFontSize(18),
    },
    itemImage: {
        width: Screen.screenWidth() * 1.5 / 10,
        height: Screen.screenWidth() * 4.5 / 40,
        marginTop: Screen.toDips(50),
    },
    line: {
        height: Screen.toDips(10),
        backgroundColor: '#F4F4F4'
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Screen.screenWidth(),
    },
    headerItem: {
        width: Screen.screenWidth() / 4 - Screen.toDips(25),
        marginLeft: Screen.toDips(10),
        marginRight: Screen.toDips(10),
        marginTop: Screen.toDips(5),
        marginBottom: Screen.toDips(5),
        height: Screen.toDips(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Screen.toDips(15),
        borderWidth: Screen.toDips(1),
        borderColor: '#e6e6e6',
    },
    headerItemText: {
        fontSize: Screen.getFontSize(16),
        color: '#000000',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        marginTop: Screen.toDips(5),
        marginBottom: Screen.toDips(5),
    },
    footerText: {
        color: '#565656'
    }
})