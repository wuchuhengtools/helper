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