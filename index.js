function printMyBio (name, years) {
  console.log('Hello, my name is ' + name + '. I am ' + years + ' years old')
}

// printMyBio('Leonid', 13)
// printMyBio('Sergey', 37)


const args = process.argv
console.log(args)
const [,, firstNumber, action, secondNumber] = args

const nodePath = args[0]
const scriptPath = args[1]
if (args.includes('--help') || args.includes('-h')) {
  console.log(`привет, это калькулятор
  чтобы сделать вычисление, напиши 5 + 6. Умеет складывать, вычитать, умножать и делить`)
} else {
  console.log('Вычисляем...', firstNumber, action, secondNumber)
  calculate()
}

function calculate () {
  if (action === '+') {
    console.log('Ответ: ', parseInt(firstNumber) + parseInt(secondNumber))
  } else if (action === "-") {
    console.log('Ответ: ', parseInt(firstNumber) - parseInt(secondNumber))
  } else if (action === "x"){
    console.log('Ответ: ', parseInt(firstNumber) * parseInt(secondNumber)) 
  }
  else if (action === ':') {
    console.log('Ответ: ', parseInt(firstNumber) / parseInt(secondNumber))
  
  }
  else  {
    console.log("я не знаю как это решить")
  }
}
