export const CONFIG = Object.freeze({
    width: 1280,
    height: 720,
    gridSize: {
        x: 5,
        y: 5
    },
    cardSize: {
        x: 2,
        y: 2
    },
    itemsCount: 14,
    cardsCount: 3, // How many cards to generate
    charsCount: 3, // How many characters to generate
    levels: [
        {
            id: 1,
            grid: [
                [1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1]
            ],
            chars: [0, 1, 2],
            cards: [
                [
                    [1, 0],
                    [1, 0]
                ],
                [
                    [1, 0],
                    [1, 0]
                ],
                [
                    [1, 0],
                    [1, 0]
                ]
            ]
        }
    ],
  chars: [
    { id:0, name: "Kifla", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} },
    { id:1, name: "Baba", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} },
    { id:2, name: "ET", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} },
    { id:3, name: "Robot", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} },
    { id:4, name: "Alien", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} },
    { id:5, name: "St. Claus", items: [ { id:3, pt: 100}, { id:3, pt: -50} ], talk: { hi: "Hello", win: "That is great", lose: "You suck"} }
  ]
})
