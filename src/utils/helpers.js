// Returns a random integer between min (inclusive) and max (inclusive).
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateCharacters (count) {
    let chars = []

    for (let i = 0; i < count; i++) {
        chars.push(i)
    }

    return chars
}

export function generateRandomLevel (levelId) {
    const characters = generateCharacters(getRandomInt(1, 3))
    const grid = []
    const cards = []

    return {
        id: levelId,
        characters,
        grid,
        cards
    }
}

export function getCurrentLevel () {

}
