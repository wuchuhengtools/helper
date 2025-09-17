/**
 * Copy string to clipboard
 * @description This function creates a temporary textarea element, sets its value to the string to be
 * copied, and uses the browser's clipboard API to copy it to the clipboard.
 * @param str - The string to be copied to the clipboard
 * @example
 * copyStringToClipboard("Hello, World!");
 * // Copies "Hello, World!" to the clipboard
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