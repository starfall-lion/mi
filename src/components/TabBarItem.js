import React, {PureComponent} from 'react';
import {Image} from 'react-native';

import * as Screen from '../utils/ScreenUtils';
class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage;
        return (
            <Image
                source={this.props.focused ? selectedImage : this.props.normalImage}
                style={{tintColor: this.props.tintColor, width: Screen.toDips(40), height: Screen.toDips(40)}}
            />)
    }
}

export default TabBarItem;