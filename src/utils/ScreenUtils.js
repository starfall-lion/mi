import {Dimensions, Platform, PixelRatio} from 'react-native'

//APP固定竖屏，则小值为宽度,大值为高度
const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);
const height = Math.max(Dimensions.get('window').width, Dimensions.get('window').height);
// UI设计图的宽度是1080
const UIPixelRatio = width / 1080;

//获取屏幕宽度
export function screenWidth() {
    return width;
}

//获取屏幕高度
export function screenHeight() {
    return height;
}

//设计图px转成手机尺寸
export function toDips(px) {
    return px * UIPixelRatio;
}

//判断当前系统是不是iOS
export function isIOS() {
    return Platform.OS === "ios";
}

//获取字体大小
export function getFontSize(px) {
    return toDips(px) + (isIOS() ? 2 : 4);
}
