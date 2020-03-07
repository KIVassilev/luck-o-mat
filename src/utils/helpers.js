import { CONFIG } from './config'

// Returns a random integer between min (inclusive) and max (inclusive).
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)

	return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateCharacters(count) {
	let chars = []

	for (let i = 0; i < count; i++) {
		chars.push(i)
	}

	return chars
}

function generateGrid(sizeX, sizeY) {
	let grid = []

	// Cols
	for (let y = 0; y < sizeX; y++) {
		let rows = []

		// Rows
		for (let x = 0; x < sizeY; x++) {
			// TODO: make it not random xD
			rows.push(getRandomInt(0, CONFIG.itemsCount))
		}

		grid.push(rows)
	}

	return grid
}

function generateCards(count, sizeX, sizeY) {
	let cards = []

	// Total cards
	for (let i = 0; i < count; i++) {
		let card = []

		// Cols
		for (let y = 0; y < sizeX; y++) {
			let rows = []

			// Rows
			for (let x = 0; x < sizeY; x++) {
				// TODO: make it not random xD
				rows.push(getRandomInt(0, 1))
			}

			card.push(rows)
		}

		cards.push(card)
	}

	return cards
}

function generateRandomLevel() {
	const chars = generateCharacters(CONFIG.charsCount)
	const grid = generateGrid(CONFIG.gridSize.x, CONFIG.gridSize.y)
	const cards = generateCards(CONFIG.cardsCount, CONFIG.cardSize.x, CONFIG.cardSize.y)

	return {
		chars,
		grid,
		cards
	}
}

export function getCurrentLevel() {
	const levelIndex = localStorage.getItem('level-index')
	let level = levelIndex ? CONFIG.levels[levelIndex] : CONFIG.levels[0]

	// If we cannot find pre generated level... generate one
	if (!level) level = generateRandomLevel()

	return level
}
