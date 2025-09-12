/**
 * Wait for an element to appear in the DOM and return a promise.
 * @param selector
 * @returns
 */
export const waitElementPromise = async <T extends Element = Element>(
  selector: string,
  timeout = 1000 * 30
): Promise<T> => {
  const maxRetryCount = timeout / 1000

  const el = document.querySelector(selector) as T

  if (el) {
    return el
  }
  console.warn(`The element ${selector} is not found.`)

  // 2.1 Listen for changes in the document.
  return new Promise((resolve) => {
    let retryCount = 0
    const cancel = setInterval(() => {
      const el = document.querySelector(selector) as T
      if (el) {
        clearInterval(cancel)
        observer.disconnect()
        return resolve(el)
      }

      if (retryCount > maxRetryCount) {
        clearInterval(cancel)
        throw new Error(
          `The element ${selector} is not found. Retry ${retryCount} times.`
        )
      }

      console.warn(
        `The element ${selector} is not found. Retry... ${++retryCount}`
      )
    }, 1000)

    const observer = new MutationObserver(() => {
      // 2.2 Check if the element exists.
      const el = document.querySelector(selector) as T
      if (el) {
        observer.disconnect()
        clearInterval(cancel)
        return resolve(el)
      }
      console.warn(`The element ${selector} is not found.`)
    })

    // 2.3 Start observing the document body.
    observer.observe(document.body, { childList: true, subtree: true })
  })
}


/**
 * Wait for an element to appear in the DOM and return a promise.
 * @param selector
 * @returns
 */
export const waitAllElementPromise = async <T extends Element = Element>(
  selector: string,
  timeout = 1000 * 30
): Promise<T[]> => {
  const maxRetryCount = timeout / 1000

  const el = document.querySelectorAll(selector) as NodeListOf<T>

  if (el.length) {
    return Array.from(el)
  }
  console.warn(`The element ${selector} is not found.`)

  // 2.1 Listen for changes in the document.
  return new Promise((resolve) => {
    let retryCount = 0
    const cancel = setInterval(() => {
      const el = document.querySelectorAll(selector) as NodeListOf<T>
      if (el.length) {
        clearInterval(cancel)
        observer.disconnect()
        return resolve(Array.from(el))
      }

      if (retryCount > maxRetryCount) {
        clearInterval(cancel)
        throw new Error(
          `The element ${selector} is not found. Retry ${retryCount} times.`
        )
      }

      console.warn(
        `The element ${selector} is not found. Retry... ${++retryCount}`
      )
    }, 1000)

    const observer = new MutationObserver(() => {
      // 2.2 Check if the element exists.
      const el = document.querySelectorAll(selector) as NodeListOf<T>
      if (el.length) {
        observer.disconnect()
        clearInterval(cancel)
        return resolve(Array.from(el))
      }
      console.warn(`The element ${selector} is not found.`)
    })

    // 2.3 Start observing the document body.
    observer.observe(document.body, { childList: true, subtree: true })
  })
}