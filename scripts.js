const form = document.querySelector("form")
const qtd = document.getElementById("numbers-quantity")
const min = document.getElementById("start-range")
const max = document.getElementById("end-range")
const option = document.getElementById("No-repeat")

qtd.oninput = () => {
    let value = qtd.value.replace(/\D+/g, "")
    console.log(value)   
}

min.oninput = () => {
    let minValue = min.value.replace(/\D+/g, "")
    console.log(minValue)    
}

max.oninput = () => {
    let maxValue = max.value.replace(/\D+/g, "")
    console.log(maxValue)   
}

option.addEventListener("change", function(){
    if (this.checked){
        option = 1
        console.log("marcado")
    } else{
        option = 0
        console.log("Desmarcado")
    }
})

function creatArray (min, max){
    let range = []
    const total = max - min + 1
    for (let i = min; i < total; i++){
        range.push(i)
    }
}

console.log(creatArray(max))






