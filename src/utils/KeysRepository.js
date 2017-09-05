import {AsyncStorage} from 'react-native';
import authority from '../data/keys_authority.json';
import information from '../data/keys_information.json';
import ArrayUtils from './ArrayUtils';

export const FLAG = {flag_authority: 'authority', flag_information: 'information'};
export default class KeysRepository {
    constructor(flag) {
        this.flag = flag;
        this.data = flag == FLAG.flag_authority ? authority : information;
        // AsyncStorage.removeItem(this.flag, (err, res) => {
        // });
        console.log(this.data);
    }

    /**
     * 获取订阅数据
     * @returns {Promise}
     */
    fetch() {
        return new Promise(
            (resolve, reject) => {
                AsyncStorage.getItem(this.flag, (err, res) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (!res) {//本地没有数据
                        this.save(this.data);
                        resolve(this.data);
                    }
                    else {//本地有数据
                        try {
                            resolve(this._concat(res, this.data));
                        } catch (e) {
                            reject(err);
                        }
                    }
                })
            }
        )
    }

    /**
     * 返回数组中已经订阅的数据
     * @param data
     * @returns {Object|*}
     */
    getchecked(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked == false) {
                // console.log(data[i]);
                data.splice(i, 1);
                i--;
            }
        }
        return data;
    }

    /**
     * 合并数组并去重 服务器更新APP内json文件后 用户本地读取文件并合并
     * @param res
     * @param keys
     * @returns {*}
     */
    _concat(res, keys) {
        if (!res) return keys;
        res = eval(res);

        //本地数组中的订阅项目是否在json文件中 如果不在则删除
        for (let i = 0; i < res.length; i++) {
            if (!this._contains(keys, res[i].id)) {
                res.splice(i, 1);
                i--;
            }
        }
        //服务器json文件增加了订阅项目，则同步到本地数组中
        let keysClone = ArrayUtils.clone(keys);
        //过滤本地数组中存在的项目
        for (let i = 0; i < keysClone.length; i++) {
            for (let j = 0; j < res.length; j++) {
                if (keysClone[i].id === res[j].id) {
                    keysClone.splice(i, 1);
                    // i--;
                }
            }
        }
        //将新增的项目加入到本地数组中
        for (let i = 0; i < keysClone.length; i++) {
            res.push(keysClone[i]);
        }
        return res;
    }

    /**
     * 数组keys中是否包含obj 包含则返回true
     * @param keys
     * @param obj
     * @returns {boolean}
     * @private
     */
    _contains(keys, obj) {
        let l = keys.length;
        while (l--) {
            if (keys[l].id == obj) {
                return true;
            }
        }
        return false;
    }


    /**
     * 判断数组中至少有一个订阅 checked = true
     * @param data
     * @returns {boolean}
     */
    check(data) {
        let l = data.length;
        while (l--) {
            if (data[l].checked == true) {
                return true;
            }
        }
        return false;
    }

    save(data) {
        let stringData = JSON.stringify(data);
        AsyncStorage.setItem(this.flag, stringData, (err, res) => {
        })
    }
}