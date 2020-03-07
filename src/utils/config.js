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
        pointsPenalty: -100
    },
    itemsCount: 15,
    cardsCount: 3, // How many cards to generate
    charsCount: 3, // How many characters to generate
    levels: [
        {
            id: 1,
            board: [
                [1, 0, 0, 1, 0],
                [1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0]
            ],
            chars: [0]

        }
    ],
    chars: [
        { 
            id: 0, 
            name: "ET", 
            items: [
                { id: 0, pt: 150 },
                { id: 1, pt: 100 },
                { id: 2, pt: 50 },
                { id: 9, pt: -150 },
                { id: 10, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 1, 
            name: "Robot", 
            items: [
                { id: 3, pt: 150 },
                { id: 4, pt: 100 },
                { id: 5, pt: 50 },
                // { id: 9, pt: -150 },
                // { id: 10, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 2, 
            name: "Kifla", 
            items: [
                { id: 6, pt: 150 },
                { id: 7, pt: 100 },
                { id: 8, pt: 50 },
                { id: 11, pt: -150 },
                { id: 2, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 3, 
            name: "Alien", 
            items: [
                { id: 8, pt: 150 },
                { id: 2, pt: 100 },
                { id: 3, pt: 50 },
                { id: 7, pt: -150 },
                { id: 0, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 4, 
            name: "Granny", 
            items: [
                { id: 9, pt: 150 },
                { id: 10, pt: 100 },
                { id: 4, pt: 50 },
                // { id: 7, pt: -150 },
                // { id: 0, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        },
        { 
            id: 5, 
            name: "Santa", 
            items: [
                { id: 5, pt: 150 },
                { id: 11, pt: 100 },
                { id: 0, pt: 50 },
                { id: 4, pt: -150 },
                { id: 3, pt: -150 },
                { id: 12, pt: -300 },
                { id: 14, pt: -300 },
                { id: 13, pt: 500 }
            ], 
            talk: { hi: "Hello", win: "That is great", lose: "You suck" } 
        }
    ]
})
