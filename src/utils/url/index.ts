/**
 * Convert object to query string
 * @example
 * obj2Query({a: 1, b: 2}) // returns "?a=1&b=2"
 * @param obj
 */
export const obj2Query = (obj: Record<string, any>): string => {
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
  
  // Remove leading question mark if present
  if (query.startsWith('?')) {
    query = query.substring(1);
  }
  
  if (query.length === 0) {
    return res;
  }

  for (const e of query.split("&")) {
    const [k, v] = e.split("=");
    if (v === undefined || v === "undefined" || v === "") continue;
    try {
      res[k] = decodeURIComponent(v);
    } catch (error) {
      // If decoding fails, use the original value
      res[k] = v;
    }
  }
  return res;
};