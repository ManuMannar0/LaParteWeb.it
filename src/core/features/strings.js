export const removeAllSpaces = (string) => string.replace(' ','')
export const cleanUrlEncoding = (string) => (string.replace('%20',' ')).replace('+',' ')
export const replaceUnicode = (string) => string.replace("&#8217;", "'")
export const replace = (string, replaceThis, withThis) => string.replaceAll(replaceThis, withThis)
export const removeFirstChar = (string) => string.slice(1)
export const upperCaseFirstChar = (string) => string.charAt(0).toUpperCase() + string.slice(1)
export const lowerCaseFirstChar = (string) => string.charAt(0).toLowerCase() + string.slice(1)
export const removeHTMLTagElement = (string) => string.slice(3).substring(0, string.slice(3).length - 5)
export const formatDate = (string) => `${string.substring(8, 6)}/${string.substring(6, 4)}/${string.substring(0, 4)}`