console.log(window.document)

const input = document.getElementById('input')

const myOnClickFunction = (event) => {
  console.log(event.target.value)
  input.value = input.value + event.target.value
}
const buttons = document.getElementsByTagName('button')
console.log(buttons)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', myOnClickFunction)
}

const root = document.getElementById('root')
root.addEventListener('keydown', (event) => {
  console.log('enter')
  if (event.keyCode === 13) {
    console.log(eval(input.value))
  }
})

document.getElementById('moving').addEventListener('mouseover', () => {
  const top = Math.random() * 500
  const left = Math.random() * 500
  document.getElementById('moving').style = `position: absolute; top: ${top}px; left: ${left}px;`
})