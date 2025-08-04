/*
 *
 * @author wuchuheng<wuchuheng@163.com>
 * @date   2021/4/13
 * @listen MIT
 */

import crypto from "crypto";

/**
 * Convert file to base64
 * @description This function reads a file and converts it to a base64 encoded string.
 * The result is a data URL that can be used to display the file in an <img> tag or to upload it to a server.
 * The file must be a valid File object,
 * @example
 * fileToBase64(new File(["content"], "filename.txt")) // returns "data:text/plain;base64, Y29udGVudA=="
 *
 * @param file
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Convert object to query string
 * @example
 * obj2Query({a: 1, b: 2}) // returns "?a=1&b=2"
 * @param obj
 */
export const obj2Query = (obj: Record<string, number | string>): string => {
  let res = "";
  for (const e in obj) {
    if (obj[e] !== "") {
      res += `${e}=${obj[e]}&`;
    }
  }
  if (res === "") return "";
  res = res.substr(0, res.length - 1);
  return "?" + res;
};

/**
 *  Copy string to clipboard
 * @description This function creates a temporary textarea element, sets its value to the string to be
 * @param str
 */
export const copyStringToClipboard = (str: string): void => {
  // Create new element
  const el = document.createElement("textarea") as HTMLTextAreaElement;
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("style", "position: 'absolute'; left: '-9999px'");
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
};

/**
 * Convert query string to object
 * @description This function takes a query string (e.g., "?a=1&b=2") and converts it to an object.
 * @example
 * ```
 * query2Obj("?a=1&b=2") // returns { a: "1", b: "2" }
 * ```
 * @param query
 */
export const query2Obj = (query: string): Record<string, string> => {
  const res: Record<string, string> = {};
  if (query.length === 0) {
    return res;
  }
  query = query.substr(1, query.length - 1);

  for (const e of query.split("&")) {
    const [k, v] = e.split("=");
    if (v === "undefined") continue;
    res[k] = decodeURI(v);
  }
  return res;
};

/**
 *  获取 hash串
 * @param str
 * @param algo
 */
export const getHash = (str: string, algo: "SHA-256" | "md5"): string => {
  const result = crypto.createHash(algo).update(str).digest("hex");

  return result;
};

/**
 * Debounce function
 * @description This function delays the execution of a function until after a specified wait time has passed
 * since the last time it was invoked. It is useful for limiting the rate at which a function can be called,
 * such as when handling user input events like key presses or mouse movements.
 * @example
 * ```
 * const debouncedFunction = debounce((data) => console.log(data), 1000);
 * debouncedFunction("Hello"); // Will log "Hello" after 1 second
 * debouncedFunction("World"); // Will not log anything until 1 second has passed since
 * ```
 * @param callback
 * @param wait
 */
export const debounce = <T>(
  callback: (params: T) => void,
  wait: number
): ((params: T) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (keyword) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      callback(keyword);
    }, wait);
  };
};

type throttlingWaitType = number;

/**
 * Throttling function
 * @description This function limits the rate at which a function can be called.
 * @example
 * ```
 * const throttledFunction = throttling((data) => console.log(data), 1000);
 * throttledFunction("Hello"); // Will log "Hello" immediately
 * throttledFunction("World"); // Will not log anything until 1 second has passed
 * ```
 * @param callback
 * @param wait
 */
export const throttling = <
  T,
  U = T extends null | undefined | never ? () => void : (data: T) => void
>(
  callback: U,
  wait: throttlingWaitType
): U => {
  type TimeOutType = ReturnType<typeof setTimeout>;
  let timer: TimeOutType | boolean;

  const res = (data: T) => {
    if (!timer) {
      timer = setTimeout(() => {
        // @ts-ignore
        (data && callback(data)) || callback();
        clearTimeout(timer as TimeOutType);
        timer = false;
      }, wait);
    }
  };

  // @ts-ignore
  return res as U;
};

// React Components
export { ResizableWrapper, type ResizableWrapperProps, type ResizableWrapperHandle, type ResizeData } from './react/ResizeWrapper';
