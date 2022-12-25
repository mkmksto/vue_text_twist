function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *
 * @param {Array} arr
 * @returns
 */
export function getRandomItem(arr) {
    return arr[getRandomInt(0, arr.length - 1)]
}

/**
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @param {Array} arr
 */
export function shuffleItems(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }

    return arr
}
