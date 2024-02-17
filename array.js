const arr = [[0,'x',0], [0,0,'x']]

arr[2] = [7,8,9]
// arr.push('lemon')
// arr.unshift('melon')

for (let y = 0; y < arr.length; y++) {
  let row = '*** '
  for (let x = 0; x < arr[y].length; x++) {
    row += arr[y][x] + ' | ' 
  }
  console.log(row)
  // console.log(i + ': ' + arr[i])
}
const clickedTile = [1,2]
const x = clickedTile[0]
const y = clickedTile[1]

if (arr[y][x] === 'x') {
  console.log('Вы проиграли')
} else {
  console.log('Мины нет', arr[y][x])
}
// console.log(arr.length)
// console.log(arr.join('\t'))
  