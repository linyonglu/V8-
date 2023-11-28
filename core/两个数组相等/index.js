/**
 * @parmas arr1
 * @parmas arr2
 * @decription 不考虑数组元素顺序
 */

//统计元素个数
const twoArrayIsEqual = (arr1, arr2) => {
    const l1 = arr1.length, l2 = arr2.length;
    const map = new Map(), res = true;

    //数组长度不行相等，直接返回false
    if (l1 !== l2) return false;

    //否则遍历arr1元素，看arr1的元素arr2是否存在，不存在直接返回false
    for (let item of arr1) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    for (let item of arr2) {
        if (map.has(item)) {
            if (!map.get(item)) return false;
            map.set(item, map.get(item) - 1);
        } else {
            return false;
        }
    }

    for ([key ,value] of map) {
        if (value) {
            res = false;
            break;
        }
    }

    return res;
}

console.log(twoArrayIsEqual([1, NaN, 3, null], [NaN, 3, null, 1]));