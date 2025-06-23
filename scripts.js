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

    if (info.qtd <= 0) {
        alert("Selecione um valor válido");
        return;
    }

    if (info.min > info.max) {
        alert("Atenção: o valor inicial da sequência deve ser maior do que o valor final");
        return;
    }

    if (info.option == true) {
        let list = [];

        for (let i = info.min; i <= info.max; i++) {
            list.push(i);
        }

        shuffleNoRepeat(list);
        result = list.slice(0, info.qtd);
    } else {
        for (let i = 0; i < info.qtd; i++) {
            let randomNumber = Math.floor(Math.random() * (info.max - info.min + 1)) + info.min;
            result.push(randomNumber);
        }
    }

    // Criar nova div com conteúdo
    const newDiv = document.createElement("div");
    newDiv.classList.add("resultado");

    const title = document.createElement("p");
    title.textContent = "Números sorteados:";
    newDiv.appendChild(title);

    result.forEach(number => {
        const span = document.createElement("span");
        span.textContent = number;
        span.classList.add("numero-sorteado");
        newDiv.appendChild(span);
    });

    
    const old = document.getElementById("old");
    old.replaceWith(newDiv);
}
