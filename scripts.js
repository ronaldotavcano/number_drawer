const form = document.querySelector("form")
const qtd = document.getElementById("numbers-quantity")
const min = document.getElementById("start-range")
const max = document.getElementById("end-range")
const option = document.getElementById("No-repeat")

form.onsubmit = (event) => {
    event.preventDefault()

    const newInfo = {
        id: new Date().getTime(),
        qtd: parseInt(qtd.value),
        min: parseInt(min.value),
        max: parseInt(max.value),
        option: option.checked, 
    }
    console.log(newInfo)
    createArray(newInfo)
}

function createArray(info) {
    let result = [];
    let list = [];

    if (info.qtd <= 0) {
        alert("Selecione um valor válido");
        return;
    }

    if (info.min > info.max) {
        alert("Atenção: o valor inicial da sequência deve ser maior do que o valor final");
        return;
    }

    if (info.option == true){
        for (let i = info.min; i <= info.max; i++) {
            list.push(i);
        }
        shuffleNoRepeat(list);
        result = list.slice(0, info.qtd);
    } else{
        for (let i = 0; i < info.qtd; i++){
            let randomNumber = Math.floor(Math.random() * (info.max - info.min + 1)) + info.min
            result.push(randomNumber)
        }
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("resultado");

    const title = document.createElement("h1");
    title.textContent = "RESULTADO DO SORTEIO";
    newDiv.appendChild(title);

    const span = document.createElement("span");
    span.textContent = "1º RESULTADO";
    newDiv.appendChild(span);

    // Cria um container para todos os números sorteados
    const container = document.createElement("div");
    container.classList.add("container-numeros");

    result.forEach((number) => {
        const numberSpan = document.createElement("span");
        numberSpan.textContent = number;
        numberSpan.classList.add("numero-sorteado");
        container.appendChild(numberSpan);
    });

    // Adiciona todos os números ao newDiv
    newDiv.appendChild(container);

    // Substitui a div antiga
    const old = document.getElementById("old");
    old.replaceWith(newDiv);
}

function shuffleNoRepeat(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}