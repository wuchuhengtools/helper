/**
 * Sleep for a specified duration
 * @description This function creates a promise that resolves after a specified delay,
 * effectively pausing the execution of async code. It's useful for adding delays in
 * asynchronous operations, rate limiting, or creating timeouts.
 * @example
 * ```typescript
 * // Basic usage - wait for 1 second
 * await sleep(1000);
 * console.log("This runs after 1 second");
 * 
 * // Use in async function
 * async function delayedOperation() {
 *   console.log("Starting...");
 *   await sleep(2000);
 *   console.log("2 seconds later");
 * }
 * 
 * // Chain with other promises
 * sleep(500).then(() => console.log("Half a second passed"));
 * ```
 * @param ms - Duration in milliseconds to sleep
 * @returns A promise that resolves after the specified duration with no value
 * @since 1.0.0
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};