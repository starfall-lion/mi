export default class ArrayUtils {
    /**
     * 更新数组 如果array中存在item 则将其删除 如果不存在就将其添加
     * @param array
     * @param item
     */
    static updateArray(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (item === array[i]) {
                array.splice(i, 1);
                return;
            }
        }
        array.push(item);
    }

    /**
     * 向数组中添加元素 若元素已经存在则不添加
     * **/
    static add(array, item) {
        if (!array) return;
        for (let i = 0; i < array.length; i++) {
            if (item === array[i]) return;
        }
        array.push(item);
    }

    /**
     * clone 数组
     * @return Array 新的数组
     * */
    static clone(from) {
        if (!from) return [];
        let newArray = [];
        for (let i = 0, l = from.length; i < l; i++) {
            newArray[i] = from[i];
        }
        return newArray;
    }

}