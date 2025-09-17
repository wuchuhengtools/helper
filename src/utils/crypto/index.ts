/**
 * Generate hash
 * @description This function generates a hash of the input string using the specified algorithm.
 * In browser environments, only SHA-256 is supported via Web Crypto API.
 * In Node.js environments, both SHA-256 and MD5 are supported.
 * @example
 * await getHash("hello", "SHA-256") // returns a SHA-256 hash
 * await getHash("hello", "md5") // returns an MD5 hash (Node.js only)
 * @param str - The string to hash
 * @param algo - The hash algorithm to use
 */
export const getHash = async (
  str: string,
  algo: "SHA-256" | "md5" = "SHA-256"
): Promise<string> => {
  // TODO: Implement cross-platform hash generation
  // This would require:
  // 1. Browser implementation using Web Crypto API
  // 2. Node.js implementation using crypto module
  // 3. Fallback for environments without crypto support
  
  throw new Error("Hash generation is not implemented yet.");
  /*
  // Cross-platform crypto support
  let crypto: any;
  let isBrowser = false;

  try {
    // Try to detect if we're in a browser environment
    if (typeof window !== "undefined" && typeof window.crypto !== "undefined") {
      isBrowser = true;
      crypto = window.crypto;
    } else {
      // We're in Node.js, import the crypto module
      crypto = require("crypto");
    }
  } catch (e) {
    // Fallback for environments where crypto is not available
    console.warn("Crypto module not available. Hash functions will not work.");
  }

  if (!crypto) {
    throw new Error("Crypto module not available in this environment");
  }

  if (isBrowser) {
    // Browser implementation using Web Crypto API
    if (algo === "md5") {
      throw new Error(
        "MD5 is not supported in browser environments. Use SHA-256 instead."
      );
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } else {
    // Node.js implementation
    const hash = crypto.createHash(algo === "SHA-256" ? "sha256" : "md5");
    hash.update(str);
    return hash.digest("hex");
  }
  */
};