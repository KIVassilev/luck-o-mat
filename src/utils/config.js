export const CONFIG = Object.freeze({
	width: 1280,
	height: 720,
	gridSize: {
		x: 6,
		y: 6
	},
	cardSize: {
		x: 2,
		y: 2
	},
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
	]
})
