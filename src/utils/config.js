export const CONFIG = Object.freeze({
    width: 1280,
    height: 720,
    boardSize: {
        x: 5,
        y: 5,
        padding: 14 // in pixels
    },
    cardSize: {
        x: 2,
        y: 2
    },
    item: {
        width: 80, // in pixels
        height: 80, // in pixels
        pointsPenalty: -30
    },
    itemsCount: 14,
    cardsCount: 3, // How many cards to generate
    charsCount: 3, // How many characters to generate
    levels: [
        {
            id: 1,
            board: [
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            chars: [0, 1, 2],
            cards: [
                [
                    [1, 1],
                    [1, 0]
                ],
                [
                    [0, 1],
                    [1, 0]
                ],
                [
                    [0, 0],
                    [1, 1]
                ]
            ]
        }
    ],
    chars: [
        { 
            id: 0, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 1, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 2, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 3, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 4, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 5, 
            name: "Kifla", 
            items: [{ id: 0, pt: 100 }, { id: 1, pt: -50 }], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        }
    ]
})
