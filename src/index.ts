/// <reference path="./typings/index.d.ts" />
/**
 * The file is part of @wuchuhengtools/request
 *
 * @author wuchuheng<wuchuheng@163.com>
 * @date   2021/4/13
 * @listen MIT
 */

const hello = (): Hellotype => "hello"

export default hello

/**
 * 文件转base64
 * @param file
 */
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
}
/**
 *  对象转请求链接参数
 *
 * @param obj
 */
export const obj2Query = (obj: Record<string, number | string>): string => {
    let res = ''
    for (const e in obj) {
        if (obj[e] !== '') {
            res += `${e}=${obj[e]}&`
        }
    }
    if (res === '') return ''
    res = res.substr(0, res.length - 1)
    return '?' + res
}

/**
 *  复制文件到粘贴板上
 * @param str
 */
export const copyStringToClipboard = (str: string): void => {
    // Create new element
    const el = document.createElement('textarea') as HTMLTextAreaElement
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("style", "position: 'absolute'; left: '-9999px'")
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

/**
 * query 转obj
 * @param query
 */
export const query2Obj = (query: string): Record<string, string> => {
    const res: Record<string, string> = {}
    if (query.length === 0) {
        return res
    }
    query = query.substr(1, query.length - 1)

    for (const e of query.split('&')) {
        const [k, v] = e.split('=')
        res[k] = v
    }
    return res
}

/**
 *  获取 hash串
 * @param str
 * @param algo
 */
export const getHash = (str: string, algo = 'SHA-256'): Promise<string> => {
    const strBuf = new TextEncoder().encode(str)
    return crypto.subtle.digest(algo, strBuf)
        .then(hash => {
            let result = ''
            const view = new DataView(hash)
            for (let i = 0; i < hash.byteLength; i += 4) {
                result += ('00000000' + view.getUint32(i).toString(16)).slice(-8)
            }
            return Promise.resolve(result)
        })
}

type DebounceFunType  = <T>(params?: T) => void
type DebounceWaitType  = number

/**
 * 防抖
 * @param callback
 * @param wait
 */
const debounce = <T>(fn: (params: T) => void, wait: number): (params: T) => void => {
    let timer: number, timeStamp:number =0;
    let context, args;

    let run = ()=>{
        timer= setTimeout(()=>{
            fn.apply(context,args);
        },wait);
    }

    let clean = () => {
        clearTimeout(timer);
    }

    return function() {
        context = this;
        args = arguments;
        let now = (new Date()).getTime();
        if (now-timeStamp < wait) {
            console.log('reset',now);
            // 清除定时器，并重新加入延迟
            clean();
            run();
        } else {
            console.log('set',now);
            run();  // last timer alreay executed, set a new timer
        }
        timeStamp = now;
    }
}

type throttlingWaitType = number;

/**
 * 节流
 * @param callback
 * @param wait
 */
export const throttling = <
    T,
    U = T extends null | undefined | never ?  () => void : (data: T) => void
    >(callback: U, wait: throttlingWaitType): U => {
    type TimeOutType  = ReturnType<typeof setTimeout> ;
    let timer: TimeOutType | boolean

    const res = (data: T) => {
        if (!timer) {
            timer = setTimeout(() => {
                // @ts-ignore
                data && callback(data) || callback()
                clearTimeout(timer as TimeOutType)
                timer = false
            }, wait)
        }
    }

    // @ts-ignore
    return res as U
}
