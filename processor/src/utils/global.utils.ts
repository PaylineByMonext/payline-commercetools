/**
 * Parses the input string to check if it is a valid JSON format.
 *
 * @param {string} str - The input string to be parsed as JSON.
 * @return {boolean} A boolean indicating if the input string is a valid JSON.
 */
export function isValidJSON(str: string): boolean {
  try {
    const parsedString = JSON.parse(str);
    if (parsedString && typeof parsedString === 'object') {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}
