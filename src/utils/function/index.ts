
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