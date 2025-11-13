


let Loop_1_To_15_Result = document.querySelector("#Loop_1_To_15_Result");






// CREATE FUNCTIONS W/ LOOPS

function Loop_1_To_15() {
    Loop_1_To_15_Result.classList.remove("hint");
    for (let i = 1; i <= 15; i++){   
        let HTML = `<span id="Result_Loop_1_To_15_${i}" class="chip">${i}</span>`;
        let Number_DOM = Loop_1_To_15_Result.insertAdjacentHTML("beforeend", HTML)
        
        console.log(Number_DOM);

        setTimeout( () => {
            document.querySelector(`#Result_Loop_1_To_15_${i}`).classList.add("show");
        },i * 100)

    }
}


// CREATE EVENT LISTENERS

document.querySelector("#Loop_1_To_15_BTN").addEventListener("click", () => Loop_1_To_15());

