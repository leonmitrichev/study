const canvas = document.getElementById('game')
const startButton = document.getElementById('start')
const TILE_SIZE_PX = 50

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const startGame = () => {
  const FIELD_WIDTH = document.getElementById('width').value
  const FIELD_HEIGHT = document.getElementById('height').value
  const MINES_COUNT = 5

  ctx     = canvas.getContext('2d');
  canvas.height = FIELD_HEIGHT * TILE_SIZE_PX;
  canvas.width  = FIELD_WIDTH * TILE_SIZE_PX;

  
	for (i = 0; i < FIELD_HEIGHT; i ++) {
		for (j = 0; j < FIELD_WIDTH; j ++) {
      ctx.strokeRect(j * TILE_SIZE_PX, i * TILE_SIZE_PX, TILE_SIZE_PX, TILE_SIZE_PX)
		}
  }

  const mines = []
  for (i = 0; i < MINES_COUNT; i++) {
    // TODO проверить, чтобы мины не повторялись
    mines.push([
      randomIntFromInterval(1, FIELD_WIDTH),
      randomIntFromInterval(1, FIELD_HEIGHT),
    ])
  }

  console.log('mines generated', mines)

}

startButton.addEventListener('click', () => {
  startGame()
})