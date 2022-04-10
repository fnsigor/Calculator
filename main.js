
const display = document.getElementById('display')
let displayCount

//forEach to show buttons in display
document.querySelectorAll('.buttons').forEach(bt => {
    bt.addEventListener('click', () => {

        const isXy = bt.innerHTML == 'X<sup>y</sup>'
        const isDelete = bt.innerHTML == 'CE'
        const isEqual = bt.innerHTML == '='
        let newLi = document.createElement('li')

        if(isDelete){
            cleanDisplay()
        } else if(isXy){
            newLi = '^'
            display.append(newLi)
        } else if(isEqual){
            
        } else{
            newLi = bt.innerHTML
            display.append(newLi)
        }
    })

})


//event to calculate when pressing the = button
document.querySelector('.equal').addEventListener('click', ()=>{
    let result = 0
    displayCount = display.textContent.trim()
        
    switch (getOperator()) {
        case "+":
            displayCount = displayCount.split('+')
            result =  Number(displayCount[0]) + Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;

        case "-":
            displayCount = displayCount.split('-')
            result =  Number(displayCount[0]) - Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;

        case "/":
            displayCount = displayCount.split('/')
            result =  Number(displayCount[0]) / Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;
            
        case "x":
            displayCount = displayCount.split('x')
            result =  Number(displayCount[0]) * Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;

        case "^":
            displayCount = displayCount.split('^')
            result =  Number(displayCount[0]) ** Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;

        case "%":
            displayCount = displayCount.split('%')
            result =  (Number(displayCount[0])/100) * Number(displayCount[1])
            cleanDisplay()
            display.innerHTML = result
            break;

        case "√":
            displayCount = displayCount.split('√')
            if(displayCount[0] == ''){
                result = Math.sqrt(Number(displayCount[1]))
                cleanDisplay()
                display.innerHTML = result
            } else {
                result =  Number(displayCount[0]) * Math.sqrt(Number(displayCount[1]))
                cleanDisplay()
                display.innerHTML = result
            }
            break;
            
        default:
            break;
    }
})


function getOperator(){
    let operator
    if(displayCount.includes('+')){
        operator = "+"
    } else if(displayCount.includes('-')){
        operator = "-"
    } else if(displayCount.includes('/')){
        operator = "/"
    } else if(displayCount.includes('x')){
        operator = "x"
    } else if(displayCount.includes('^')){
        operator = "^"
    } else if(displayCount.includes('%')){
        operator = "%"
    } else if(displayCount.includes('√')){
        operator = "√"
    }
    return operator
}


function cleanDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}
