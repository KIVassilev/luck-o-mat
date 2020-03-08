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
            id: 0,
            board: [
                [1, 0, 0, 1, 0],
                [1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 1, 0, 0, 1],
                [0, 1, 0, 1, 0]
            ],
            chars: [0]
        },
        {
            id: 1,
            board: [ // 0 - 1 - 2 - 9 - 10
                [1, 0, 10, 1, 2],
                [10, 9, 1, 0, 0],
                [0, 10, 2, 9, 9],
                [9, 2, 9, 0, 1],
                [0, 1, 0, 1, 10]
            ],
            chars: [0, 4]
        },
        {
            id: 2,
            board: [ // 3 - 4 - 6 - 7 - 9 - 10
                [3, 6, 10, 3, 4],
                [10, 9, 3, 7, 6],
                [6, 10, 4, 9, 9],
                [9, 7, 9, 6, 4],
                [4, 3, 7, 3, 10]
            ],
            chars: [4, 2, 1]
        },
        {
            id: 3,
            board: [ // 0 - 1 - 2 - 5 - 11 - 8
                [2, 5, 11, 1, 8],
                [1, 0, 1, 0, 11],
                [12, 2, 11, 2, 1],
                [5, 8, 2, 0, 5],
                [0, 1, 8, 13, 5]
            ],
            chars: [3, 0, 5]
        },
        {
            id: 4,
            board: [ // 3 - 4 - 5 - 9 - 10 - 11
                [3, 4, 5, 13, 12],
                [9, 9, 3, 12, 10],
                [11, 4, 9, 3, 5],
                [11, 5, 10, 13, 11],
                [10, 12, 3, 5, 4]
            ],
            chars: [4, 5, 1]
        },
        {
            id: 5,
            board: [ // 2 - 3 - 4 - 6 - 7 - 8
                [2, 3, 14, 6, 13],
                [8, 3, 6, 8, 14],
                [12, 4, 4, 2, 12],
                [3, 14, 13, 6, 3],
                [7, 2, 14, 4, 8]
            ],
            chars: [1, 3, 2]
        },
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
