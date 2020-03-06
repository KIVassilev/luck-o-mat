import Phaser from 'phaser'
import { CONFIG } from './utils/config'
import Scenes from './scenes'

const GAME = new Phaser.Game({
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: CONFIG.width,
	height: CONFIG.height,
	scene: Scenes
})

export default GAME
