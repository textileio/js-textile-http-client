/**
 * Verify two checksums against each other
 *
 * @param {string[]} expected Expected checksum value
 * @param {string[]} actual Actual observed checksum value
 * @returns {boolean} boolean
 */
export function verifyChecksum (expected: string[], actual: string[]): boolean {
  if (expected.length !== actual.length) {
    return false
  }
  if (expected.length === 0) {
    return true
  }
  for (let i = 0; i < expected.length; i += 1) {
    if (expected[i] !== actual[i]) {
      return false
    }
  }
  return true
}
