import {getHash} from "../src";

/**
 *  测试getHash方法
 */
test("#Test getHase function.", async () => {
    const newHashStr = getHash("hello", 'md5')
    expect(newHashStr).toStrictEqual("5d41402abc4b2a76b9719d911017c592")
})