let Loop_1_To_15_Result = document.querySelector("#Loop_1_To_15_Result");
let Loop_15_To_1_Result = document.querySelector("#Loop_15_To_1_Result");
let Loop_1_To_30_Result = document.querySelector("#Loop_1_To_30_Result");
let Loop_30_To_0_Result = document.querySelector("#Loop_30_To_0_Result");
let Loop_N50_To_50_Result = document.querySelector("#Loop_-50_To_50_Result");
let Loop_N50_To_50_2_Result = document.querySelector(
  "#Loop_-50_To_50_2_Result"
);

// CREATE FUNCTIONS W/ LOOPS

function Loop_1_To_15() {
  let Target_Result = Loop_1_To_15_Result;

  let Start = 1;
  let End = 15;
  let Step = 1;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;
  for (i = Start; i <= End; i = i + Step) {
    console.log(i);
    let HTML = document.createElement("span");
    HTML.textContent = i;
    HTML.classList.add("chip");
    Target_Result.appendChild(HTML);

    setTimeout(() => {
      HTML.classList.add("show");
    }, index * 100);
    index++;
  }
}

function Loop_15_To_1() {
  let Target_Result = Loop_15_To_1_Result;

  let Start = 15;
  let End = 1;
  let Step = 1;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;
  for (i = Start; i >= End; i = i - Step) {
    console.log(i);
    if (i % 5 == 0) {
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
    }
    index++;
  }
}

function Loop_1_To_30() {
  let Target_Result = Loop_1_To_30_Result;

  let Start = 1;
  let End = 30;
  let Step = 1;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");

  let index = 0;
  for (i = Start; i <= End; i = i + Step) {
    console.log(i);
    if (i % 2 != 0) {
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
    }
    index++;
  }
}

function Loop_30_To_0() {
  let Target_Result = Loop_30_To_0_Result;

  let Start = 30;
  let End = 0;
  let Step = 5;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;
  for (i = Start; i >= End; i = i - Step) {
    console.log(i);
    if (i % 5 == 0) {
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
    }
    index++;
  }
}

function Loop_N50_To_50() {
  let Target_Result = Loop_N50_To_50_Result;

  let Start = -50;
  let End = 50;
  let Step = 5;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;
  for (i = Start; i <= End; i = i + Step) {
    console.log(i);
    let HTML = document.createElement("span");
    HTML.textContent = i;
    HTML.classList.add("chip");
    Target_Result.appendChild(HTML);

    setTimeout(() => {
      HTML.classList.add("show");
    }, index * 100);
    index++;
  }
}

function Loop_N50_To_50_2() {
  let Target_Result = Loop_N50_To_50_2_Result;

  let Start = -50;
  let End = 50;
  let Step = 2;

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;
  for (i = Start; i <= End; i = i + Step) {
    console.log(i);
    if (i % 2 == 0) {
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
      index++;
    }
  }
}

function Custom_Loop(Target_Id, Start, End, Step, Filter) {
  if (
    !Target_Id ||
    typeof Start != "number" ||
    typeof End != "number" ||
    typeof Step != "number"
  ) {
    console.log("Error: One Missing Argument");
    return;
  }

  let Target_Result = document.querySelector(`#${Target_Id}`);

  if (!Target_Result) {
    console.log("Target_Result not found");
    return;
  }

  Target_Result.classList.remove("hint");
  let index = 0;

  if (Start <= End) {
    for (i = Start; i <= End; i = i + Step) {
      console.log(i);
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
      index++;
    }
  } else if (Start > End) {
    for (i = Start; i >= End; i = i - Step) {
      console.log(i);
      let HTML = document.createElement("span");
      HTML.textContent = i;
      HTML.classList.add("chip");
      Target_Result.appendChild(HTML);

      setTimeout(() => {
        HTML.classList.add("show");
      }, index * 100);
      index++;
    }
  }
}

function Reset(BTN) {
  let Result_Div = BTN.closest(".card-body").querySelector(".result-row");
  if (Result_Div) {
    Result_Div.innerHTML = "";
    Result_Div.classList.add("hint");
  }
}

// CREATE EVENT LISTENERS

document
  .querySelector("#Loop_1_To_15_BTN")
  .addEventListener("click", Loop_1_To_15);
document
  .querySelector("#Loop_15_To_1_BTN")
  .addEventListener("click", Loop_15_To_1);
document
  .querySelector("#Loop_1_To_30_BTN")
  .addEventListener("click", Loop_1_To_30);
document
  .querySelector("#Loop_30_To_0_BTN")
  .addEventListener("click", Loop_30_To_0);
document
  .querySelector("#Loop_-50_To_50_BTN")
  .addEventListener("click", Loop_N50_To_50);
document
  .querySelector("#Loop_-50_To_50_2_BTN")
  .addEventListener("click", Loop_N50_To_50_2);

document.querySelector("#pg-run").addEventListener("click", () => {
  let Target = document.querySelector("#pg-row");

  let Start = Number(document.querySelector("#pg-start").value);
  let End = Number(document.querySelector("#pg-end").value);
  let Step = Number(document.querySelector("#pg-step").value);
  let Filter = document.querySelector("#pg-filter").value;

  if (Step < 0) {
    Step = -Step;
  }

  Custom_Loop(Target.id, Start, End, Step, Filter);
});
