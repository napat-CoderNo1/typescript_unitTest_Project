"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    const ret = [];
    let pointer_1 = 0;
    let pointer_2 = 0;
    while (pointer_1 < collection_1.length && pointer_2 < collection_2.length) {
        if (collection_1[pointer_1] <= collection_2[pointer_2]) {
            ret.push(collection_1[pointer_1]);
            pointer_1 += 1;
        }
        else {
            ret.push(collection_2[pointer_2]);
            pointer_2 += 1;
        }
    }
    if (pointer_1 < collection_1.length) {
        for (let i = pointer_1; i < collection_1.length; i++) {
            ret.push(collection_1[i]);
        }
    }
    if (pointer_2 < collection_2.length) {
        for (let i = pointer_2; i < collection_2.length; i++) {
            ret.push(collection_2[i]);
        }
    }
    return ret;
}
exports.merge = merge;
let collection_1 = [1, 3, 5, 7, 9];
let collection_2 = [2, 4, 6, 8, 10];
console.log(merge(collection_1, collection_2));
