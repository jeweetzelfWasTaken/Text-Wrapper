/**
 * Wrap some text!
 * @param {string} text The text to wrap
 * @param {object} options The options object
 * @param {number} options.width The width of the wrapping
 * @returns {string} The wrapped text
 */
module.exports = function (text, options) {
    if (!text) throw new Error('No text provided');
    if(typeof text !== 'string') throw new TypeError('Text must be a string');
    if (!options) throw new Error('No options provided');
    if (typeof options !== 'object') throw new TypeError('Options must be an object');
    if (!options.width) throw new Error('No width provided');
    if (typeof options.width !== 'number') throw new TypeError('Width must be a number');

    let str = text;

    let splitted = str.split(' ');

    let arr = []
    let maxChars = options.width;

    splitted.forEach(split => {
        if (!arr.length || arr[arr.length - 1].length + split.length >= maxChars) {
            arr.push(split);
        } else {
            arr[arr.length - 1] += ` ${split}`;
        }
    })

    let correctString = arr.join('\n');
    
    return correctString;
}