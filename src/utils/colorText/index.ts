/**
 * ANSI color codes for terminal text styling.
 */
export enum Color {
  /** Red text color */
  red = "\x1b[31m",
  /** Green text color */
  green = "\x1b[32m",
  /** Bold text style */
  bold = "\x1b[1m",
  /** Reset all styles */
  reset = "\x1b[0m",
}

/** Available color options for text styling */
type Colors = "red" | "green" | "bold";

/**
 * Applies ANSI color codes to text for terminal output.
 * @param text - The text to colorize
 * @param colors - One or more color/style options to apply
 * @returns The text wrapped with ANSI color codes
 */
export const colorText = (text: string, ...colors: Colors[]) =>
  colors.map((color) => Color[color]).join("") + text + Color.reset;
